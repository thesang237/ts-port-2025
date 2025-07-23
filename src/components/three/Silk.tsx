'use client';
import React, {
  forwardRef,
  useMemo,
  useRef,
  useLayoutEffect,
  useEffect,
} from 'react';
import { Canvas, useFrame, useThree, RootState } from '@react-three/fiber';
import { Color, Mesh, ShaderMaterial } from 'three';
import { IUniform } from 'three';

type NormalizedRGB = [number, number, number];

const hexToNormalizedRGB = (hex: string): NormalizedRGB => {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.slice(0, 2), 16) / 255;
  const g = parseInt(clean.slice(2, 4), 16) / 255;
  const b = parseInt(clean.slice(4, 6), 16) / 255;
  return [r, g, b];
};

const getNearColorHex = (hex: string): string => {
  switch (hex.toLowerCase()) {
    case '#ea580c':
      return '#facc15'; // orange → yellow
    case '#16a34a':
      return '#007949'; // green → blue
    case '#db2777':
      return '#b91c1c'; // pink → red
    case '#8e51ff':
      return '#ec4899'; // violet → pink
    default:
      return '#facc15'; // fallback to yellow
  }
};

interface UniformValue<T = number | Color> {
  value: T;
}

interface SilkUniforms {
  uSpeed: UniformValue<number>;
  uScale: UniformValue<number>;
  uNoiseIntensity: UniformValue<number>;
  uColor: UniformValue<Color>;
  uColor2: UniformValue<Color>; // ← NEW
  uRotation: UniformValue<number>;
  uTime: UniformValue<number>;
  [uniform: string]: IUniform;
}

const vertexShader = `
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vPosition = position;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;
uniform vec3 uColor;
uniform vec3 uColor2;
uniform float uSpeed;
uniform float uScale;
uniform float uRotation;
uniform float uNoiseIntensity;

const float e = 2.71828182845904523536;

float noise(vec2 texCoord) {
  float G = e;
  vec2 r = (G * sin(G * texCoord));
  return fract(r.x * r.y * (1.0 + texCoord.x));
}

vec2 rotateUvs(vec2 uv, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  mat2 rot = mat2(c, -s, s, c);
  return rot * uv;
}

void main() {
  float rnd = noise(gl_FragCoord.xy);
  vec2 uv = rotateUvs(vUv * uScale, uRotation);
  vec2 tex = uv * uScale;
  float tOffset = uSpeed * uTime;

  tex.y += 0.03 * sin(8.0 * tex.x - tOffset);

  float pattern = 0.6 +
                  0.4 * sin(5.0 * (tex.x + tex.y +
                                   cos(3.0 * tex.x + 5.0 * tex.y) +
                                   0.02 * tOffset) +
                           sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));

  // Blend black → uColor → uColor2
  vec3 colorA = vec3(0.0); // Black
  vec3 colorB = uColor;
  vec3 colorC = uColor2;

  float mid = 0.5;

  vec3 blendAB = mix(colorA, colorB, smoothstep(0.0, mid, pattern));
  vec3 finalColor = mix(blendAB, colorC, smoothstep(mid, 1.0, pattern));

  vec4 col = vec4(finalColor, 1.0) - rnd / 15.0 * uNoiseIntensity;

  gl_FragColor = col;
}

`;

interface SilkPlaneProps {
  uniforms: SilkUniforms;
}

const SilkPlane = React.memo(
  forwardRef<Mesh, SilkPlaneProps>(function SilkPlane({ uniforms }, ref) {
    const { viewport } = useThree();
    const materialRef = useRef<ShaderMaterial>(null);
    const timeRef = useRef(0);

    // Memoize the shader material to prevent recreation
    const shaderMaterial = useMemo(
      () => (
        <shaderMaterial
          ref={materialRef}
          uniforms={uniforms}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
        />
      ),
      [uniforms]
    );

    useLayoutEffect(() => {
      const mesh = ref as React.MutableRefObject<Mesh | null>;
      if (mesh.current) {
        mesh.current.scale.set(viewport.width, viewport.height, 1);
      }
    }, [ref, viewport]);

    // Optimized frame callback with proper delta time handling
    useFrame((_state: RootState, delta: number) => {
      if (materialRef.current) {
        // Accumulate time for smooth animation
        timeRef.current += delta;
        materialRef.current.uniforms.uTime.value = timeRef.current;
      }
    });

    // Cleanup animation on unmount
    useEffect(() => {
      const material = materialRef.current;
      return () => {
        if (material) {
          material.uniforms.uTime.value = 0;
        }
        timeRef.current = 0;
      };
    }, []);

    return (
      <mesh ref={ref}>
        <planeGeometry args={[1, 1, 1, 1]} />
        {shaderMaterial}
      </mesh>
    );
  })
);

SilkPlane.displayName = 'SilkPlane';

export interface SilkProps {
  speed?: number;
  scale?: number;
  color?: string;
  noiseIntensity?: number;
  rotation?: number;
}

const Silk: React.FC<SilkProps> = React.memo(
  ({
    speed = 5,
    scale = 1,
    color = '#7B7481',
    noiseIntensity = 1.5,
    rotation = 0,
  }) => {
    const meshRef = useRef<Mesh>(null);

    // Memoize uniforms to prevent unnecessary re-renders
    const uniforms = useMemo<SilkUniforms>(
      () => ({
        uSpeed: { value: speed },
        uScale: { value: scale },
        uNoiseIntensity: { value: noiseIntensity },
        uColor: { value: new Color(...hexToNormalizedRGB(color)) },
        uColor2: {
          value: new Color(...hexToNormalizedRGB(getNearColorHex(color))),
        }, // ← ADD
        uRotation: { value: rotation },
        uTime: { value: 0 },
      }),
      [speed, scale, noiseIntensity, color, rotation]
    );

    // Memoize the Canvas configuration
    const canvasConfig = useMemo(
      () => ({
        dpr: [1, 1.5] as [number, number], // Reduced DPR for better performance
        frameloop: 'always' as const, // Continuous rendering for smooth animation
        gl: {
          antialias: false, // Disable antialiasing for better performance
          alpha: false,
          powerPreference: 'high-performance' as const,
        },
      }),
      []
    );

    return (
      <Canvas {...canvasConfig}>
        <SilkPlane ref={meshRef} uniforms={uniforms} />
      </Canvas>
    );
  }
);

Silk.displayName = 'Silk';

export default Silk;
