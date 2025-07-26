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
              onClick={() => {
                // Change the scrollbar thumb color to the active color
                if (typeof window !== 'undefined') {
                  const root = document.documentElement;
                  // Set a CSS variable for the active color
                  root.style.setProperty(
                    '--scrollbar-thumb-color--hover',
                    color.hex
                  );
                  root.style.setProperty(
                    '--scrollbar-thumb-color',
                    color.hex.concat('aa')
                  );

                  // Create a style tag if it doesn't exist
                  let styleTag = document.getElementById(
                    'dynamic-scrollbar-thumb'
                  );
                  if (!styleTag) {
                    styleTag = document.createElement('style');
                    styleTag.id = 'dynamic-scrollbar-thumb';
                    document.head.appendChild(styleTag);
                  }
                  // Set the scrollbar thumb background to the active color
                  styleTag.innerHTML = `
                    ::-webkit-scrollbar-thumb {
                      background: linear-gradient(to top, var(--scrollbar-thumb-color, #ffffff55), #ffffff00);
                    }
                    ::-webkit-scrollbar-thumb:hover {
                      background: linear-gradient(to top, var(--scrollbar-thumb-color--hover, #ffffffaa), #ffffff00);
                    }
                  `;
                }
                onChange(color.id);
              }}
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
