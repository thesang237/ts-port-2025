// constants/themeOptions.ts
export interface ColorOption {
  id: string;
  text: string;
  fgColor: string;
  bgColor: string;
  ringColor: string;
  hex: string;
  border: string;
}

export const colorOptions: ColorOption[] = [
  {
    id: 'orange',
    text: 'text-orange-600',
    fgColor: 'bg-orange-500',
    bgColor: 'bg-orange-600',
    ringColor: 'ring-orange-500',
    hex: '#ea580c',
    border: 'border-orange-500',
  },
  {
    id: 'violet',
    text: 'text-violet-500',
    fgColor: 'bg-violet-500',
    bgColor: 'bg-violet-500',
    ringColor: 'ring-violet-500',
    hex: '#8e51ff',
    border: 'border-violet-500',
  },
  {
    id: 'pink',
    text: 'text-pink-500',
    fgColor: 'bg-pink-500',
    bgColor: 'bg-pink-500',
    ringColor: 'ring-pink-500',
    hex: '#db2777',
    border: 'border-pink-500',
  },
  {
    id: 'green',
    text: 'text-green-500',
    fgColor: 'bg-green-500',
    bgColor: 'bg-green-500',
    ringColor: 'ring-green-500',
    hex: '#16a34a',
    border: 'border-green-500',
  },
  // {
  //   id: 'light',
  //   text: 'text-stone-900',
  //   fgColor: 'bg-stone-900',
  //   bgColor: 'bg-stone-50',
  //   ringColor: 'ring-stone-50',
  //   hex: '#0c0a09',
  //   border: 'border-stone-50',
  // },
  // {
  //   id: 'dark',
  //   text: 'text-stone-50',
  //   fgColor: 'bg-stone-50',
  //   bgColor: 'bg-stone-950',
  //   ringColor: 'ring-stone-900',
  //   hex: '#fafaf9',
  //   border: 'border-stone-400',
  // },
];
