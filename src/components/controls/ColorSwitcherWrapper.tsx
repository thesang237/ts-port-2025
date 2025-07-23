'use client';

import ColorSwitcher from './ColorSwitcher';
import { useThemeStore } from '@/store/useThemeStore';

export default function ColorSwitcherWrapper() {
  const activeColor = useThemeStore(state => state.activeColor);
  const setActiveColor = useThemeStore(state => state.setActiveColor);

  return <ColorSwitcher activeColor={activeColor} onChange={setActiveColor} />;
}
