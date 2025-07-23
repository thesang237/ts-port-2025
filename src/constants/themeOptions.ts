// constants/themeOptions.ts
export interface ColorOption {
  id: string;
  bgColor: string;
  ringColor: string;
  hex: string;
}

export const colorOptions: ColorOption[] = [
  {
    id: 'orange',
    bgColor: 'bg-orange-500',
    ringColor: 'ring-white/10',
    hex: '#ea580c',
  },
  {
    id: 'violet',
    bgColor: 'bg-violet-500',
    ringColor: 'ring-white/10',
    hex: '#8e51ff',
  },
  {
    id: 'pink',
    bgColor: 'bg-pink-500',
    ringColor: 'ring-white/10',
    hex: '#db2777',
  },
  {
    id: 'green',
    bgColor: 'bg-green-500',
    ringColor: 'ring-white/10',
    hex: '#16a34a',
  },
];
