'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { colorOptions } from '@/constants/themeOptions';

interface ColorSwitcherProps {
  activeColor: string;
  onChange: (color: string) => void;
}

const ColorSwitcher: React.FC<ColorSwitcherProps> = React.memo(
  ({ activeColor, onChange }) => {
    return (
      <div className='glass-sidebar grid flex-1 grid-cols-2 grid-rows-2 place-items-center gap-2 p-2'>
        {colorOptions.map(color => {
          const isActive = activeColor === color.id;

          return (
            <button
              key={color.id}
              onClick={() => onChange(color.id)}
              className={cn(
                'flex size-full items-center justify-center rounded-full transition-all duration-200 hover:scale-110 hover:bg-white/5',
                isActive ? `ring-2 ${color.ringColor}` : ''
              )}
              aria-label={`Switch to ${color.id}`}
            >
              <div className={cn('size-4 rounded-full', color.bgColor)} />
            </button>
          );
        })}
      </div>
    );
  }
);

ColorSwitcher.displayName = 'ColorSwitcher';
export default ColorSwitcher;
