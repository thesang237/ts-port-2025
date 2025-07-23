import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { type ColorTheme } from '@/store/useThemeStore';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const lerp = (start: number, end: number, factor: number) => {
  return start + (end - start) * factor;
};

export const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
};

export const mapRange = (
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
) => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

export function getColorClasses(colorTheme: ColorTheme) {
  const colorMap = {
    orange: {
      bg: 'bg-orange-600',
      hover: 'hover:bg-orange-700',
      text: 'text-white',
      ring: 'ring-orange-500',
      border: 'border-orange-500',
    },
    violet: {
      bg: 'bg-violet-600',
      hover: 'hover:bg-violet-700',
      text: 'text-white',
      ring: 'ring-violet-500',
      border: 'border-violet-500',
    },
    pink: {
      bg: 'bg-pink-600',
      hover: 'hover:bg-pink-700',
      text: 'text-white',
      ring: 'ring-pink-500',
      border: 'border-pink-500',
    },
    green: {
      bg: 'bg-green-600',
      hover: 'hover:bg-green-700',
      text: 'text-white',
      ring: 'ring-green-500',
      border: 'border-green-500',
    },
  };

  return colorMap[colorTheme];
}
