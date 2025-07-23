// lib/theme.ts
import { colorOptions } from '@/constants/themeOptions';

export const getColorHexById = (id: string): string => {
  return colorOptions.find(option => option.id === id)?.hex || '#ea580c';
};
