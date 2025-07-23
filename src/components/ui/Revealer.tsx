'use client';

import { useThemeStore } from '@/store/useThemeStore';
import { colorOptions } from '@/constants/themeOptions';
// import { useRevealer } from '@/hooks/useRevealer';

export default function Revealer() {
  const activeColor = useThemeStore(state => state.activeColor);
  // useRevealer();

  return (
    <div
      className='revealer pointer-events-none absolute top-0 left-0 z-20 h-full w-full origin-top'
      style={{
        backgroundColor: colorOptions.find(color => color.id === activeColor)
          ?.hex,
      }}
    />
  );
}
