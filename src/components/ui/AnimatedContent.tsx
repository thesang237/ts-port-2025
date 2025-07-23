import React, { useRef, useEffect, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedContentProps {
  children: ReactNode;
  distance?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  delay?: number;
  trigger?: string; // ScrollTrigger start position
  onComplete?: () => void;
  className?: string;
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  distance = 50,
  direction = 'up',
  duration = 0.8,
  delay = 0,
  trigger = 'top 80%',
  onComplete,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Determine animation properties based on direction
    const getAnimationProps = () => {
      switch (direction) {
        case 'up':
          return { y: distance, x: 0 };
        case 'down':
          return { y: -distance, x: 0 };
        case 'left':
          return { x: distance, y: 0 };
        case 'right':
          return { x: -distance, y: 0 };
        default:
          return { y: distance, x: 0 };
      }
    };

    const { x: fromX, y: fromY } = getAnimationProps();

    // Set initial state
    gsap.set(element, {
      x: fromX,
      y: fromY,
      opacity: 0,
    });

    // Create animation
    scrollTriggerRef.current = ScrollTrigger.create({
      trigger: element,
      start: trigger,
      onEnter: () => {
        gsap.to(element, {
          x: 0,
          y: 0,
          opacity: 1,
          duration,
          ease: 'power3.out',
          delay,
          onComplete,
        });
      },
      once: true,
    });

    // Cleanup function
    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }
      gsap.killTweensOf(element);
    };
  }, [distance, direction, duration, delay, trigger, onComplete]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default AnimatedContent;
