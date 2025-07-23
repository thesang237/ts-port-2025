'use client';

import { useThemeStore } from '@/store/useThemeStore';
import { colorOptions } from '@/constants/themeOptions';
import SplitText from './SplitText';
import { REVEALER_IN_DURATION } from '@/constants/motion';
import { cn } from '@/lib/utils';
// import { useRevealer } from '@/hooks/useRevealer';

export default function Revealer({ title }: { title: string }) {
  const activeColor = useThemeStore(state => state.activeColor);
  // useRevealer();

  return (
    <div
      className='revealer pointer-events-none absolute top-0 left-0 z-20 grid h-full w-full origin-top place-content-center'
      style={{
        backgroundColor: colorOptions.find(color => color.id === activeColor)
          ?.hex,
      }}
    >
      <SplitText
        as='h1'
        className={cn(
          'text-background text-5xl leading-[1.2] font-bold tracking-wide uppercase'
        )}
        delay={REVEALER_IN_DURATION - 0.4}
        stagger={25}
        duration={0.3}
        ease='power3.out'
        splitType='chars'
        from={{ opacity: 0, y: 30 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin='-100px'
        textAlign='left'
        onLetterAnimationComplete={() => {}}
      >
        {title}
      </SplitText>
    </div>
  );
}
