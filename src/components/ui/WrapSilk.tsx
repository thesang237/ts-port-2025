import { useMemo } from 'react';
import { useThemeStore } from '@/store/useThemeStore';
import { getColorHexById } from '@/lib/theme';
import Silk from '@/components/three/Silk';

export default function WrapSilk() {
  const activeColor = useThemeStore(state => state.activeColor);

  const silkProps = useMemo(
    () => ({
      speed: 0.5,
      scale: 1,
      color: getColorHexById(activeColor),
      noiseIntensity: 0,
      rotation: 0,
    }),
    [activeColor]
  );

  return (
    <div className='fixed inset-0 z-0'>
      <Silk key={activeColor} {...silkProps} />
    </div>
  );
}
