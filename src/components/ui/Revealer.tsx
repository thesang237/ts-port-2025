'use client';

import { useThemeStore } from '@/store/useThemeStore';
import { colorOptions } from '@/constants/themeOptions';
import SplitText from './SplitText';
import { cn } from '@/lib/utils';
import { useRevealer } from '@/hooks/useRevealer';

export default function Revealer({ title }: { title: string }) {
  const activeColor = useThemeStore(state => state.activeColor);
  const hasHydrated = useThemeStore(state => state.hasHydrated);

  // const projectsLayout = document.querySelector(
  //   '.projects-layout'
  // ) as HTMLElement | null;
  // projectsLayout && (projectsLayout.style.overflow = 'hidden');

  const bgColor = hasHydrated
    ? colorOptions.find(color => color.id === activeColor)?.hex
    : 'var(--background)';

  useRevealer();

  return (
    <div
      className='revealer pointer-events-none absolute top-0 left-0 z-20 grid h-full w-full origin-top place-content-center'
      style={{
        backgroundColor: bgColor,
      }}
    >
      <SplitText
        as='h1'
        className={cn(
          'text-background text-5xl leading-[1.2] font-bold tracking-wide uppercase'
        )}
        delay={0}
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
