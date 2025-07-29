// store/useThemeStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ColorTheme = 'orange' | 'violet' | 'pink' | 'green';
// export type ColorTheme = 'light' | 'dark';

type ThemeState = {
  activeColor: string;
  setActiveColor: (color: string) => void;
  hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    set => ({
      activeColor: 'orange',
      // activeColor: 'dark',
      setActiveColor: color => set({ activeColor: color }),
      hasHydrated: false,
      setHasHydrated: state => set({ hasHydrated: state }),
    }),
    {
      name: 'theme-storage',
      onRehydrateStorage: () => state => {
        state?.setHasHydrated(true);
      },
    }
  )
);
