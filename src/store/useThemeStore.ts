// store/useThemeStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ColorTheme = 'orange' | 'violet' | 'pink' | 'green';

type ThemeState = {
  activeColor: string;
  setActiveColor: (color: string) => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    set => ({
      activeColor: 'orange', // default value
      setActiveColor: color => set({ activeColor: color }),
    }),
    {
      name: 'theme-storage', // key in localStorage
    }
  )
);
