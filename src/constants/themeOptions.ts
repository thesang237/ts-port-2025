// constants/themeOptions.ts
export interface ColorOption {
  id: string;
  bgColor: string;
  ringColor: string;
  hex: string;
  border: string;
}

export const colorOptions: ColorOption[] = [
  {
    id: 'orange',
    bgColor: 'bg-orange-500',
    ringColor: 'ring-orange-500',
    hex: '#ea580c',
    border: 'border-orange-500',
  },
  {
    id: 'violet',
    bgColor: 'bg-violet-500',
    ringColor: 'ring-violet-500',
    hex: '#8e51ff',
    border: 'border-violet-500',
  },
  {
    id: 'pink',
    bgColor: 'bg-pink-500',
    ringColor: 'ring-pink-500',
    hex: '#db2777',
    border: 'border-pink-500',
  },
  {
    id: 'green',
    bgColor: 'bg-green-500',
    ringColor: 'ring-green-500',
    hex: '#16a34a',
    border: 'border-green-500',
  },
];
