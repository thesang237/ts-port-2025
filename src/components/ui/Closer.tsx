'use client';

import { useThemeStore } from '@/store/useThemeStore';
import { colorOptions } from '@/constants/themeOptions';

export default function Closer() {
  const activeColor = useThemeStore(state => state.activeColor);

  return (
    <div
      className='closer pointer-events-none absolute top-0 left-0 z-10 h-full w-full origin-bottom scale-y-0'
      style={{
        backgroundColor: colorOptions.find(color => color.id === activeColor)
          ?.hex,
      }}
    />
  );
}
