import { colorOptions } from '@/constants/themeOptions';
import { useThemeStore } from '@/store/useThemeStore';

export default function MainBackground() {
  const activeColor = useThemeStore(state => state.activeColor);
  const hasHydrated = useThemeStore(state => state.hasHydrated);
  if (!hasHydrated) return null; // or a skeleton / loader

  return (
    <div className='fixed inset-0 z-0 h-screen w-screen bg-black/0'>
      <img
        src='/main-bg.jpg'
        alt='Main Background'
        className='h-full w-full object-cover'
      />
      <div
        style={{
          mixBlendMode: 'multiply',
          backgroundColor: colorOptions.find(color => color.id === activeColor)
            ?.hex,
        }}
        className='absolute inset-0 z-0 h-full w-full'
      />
    </div>
  );
}
