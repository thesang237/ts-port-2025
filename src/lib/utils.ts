import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { type ColorTheme } from '@/store/useThemeStore';
import { colorOptions } from '@/constants/themeOptions';

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
  const color = colorOptions.find(color => color.id === colorTheme);

  return color;
}
