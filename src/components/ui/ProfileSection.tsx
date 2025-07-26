'use client';

import { ColorTheme, useThemeStore } from '@/store/useThemeStore';
import RotatingText from '../ui/RotatingText';
import { cn, getColorClasses } from '@/lib/utils';

const getColorHexById = (theme: string) => {
  const colorMap = {
    orange: '#ea580c',
    violet: '#8e51ff',
    pink: '#db2777',
    green: '#16a34a',
  };
  return colorMap[theme as keyof typeof colorMap] || '#ea580c';
};

export default function ProfileSection() {
  const activeColor = useThemeStore(state => state.activeColor);
  const colorClasses = getColorClasses(activeColor as ColorTheme);

  return (
    <div className='glass-sidebar flex flex-col gap-2 p-4'>
      <div className='w-full'>
        <svg
          width='100%'
          height='100%'
          viewBox='0 0 422 77'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='h-auto w-full'
        >
          <path
            d='M23.3685 61.9999V25.911H2.44995V15.8962H56.3759V25.911H35.4574L35.3981 61.9999H23.3685Z'
            fill={colorClasses?.hex}
          />
          <path
            d='M59.575 61.9999V15.8962H71.6046V33.4962H103.723V15.8962H115.753V61.9999H103.723V44.0444H71.6046V61.9999H59.575Z'
            fill={colorClasses?.hex}
          />
          <path
            d='M122.125 61.9999V15.8962H170.895V25.7332H134.095V33.7925H168.94V43.274H134.095V52.1629H171.666V61.9999H122.125Z'
            fill={colorClasses?.hex}
          />
          <path
            d='M202.693 62.8888C188.352 62.8888 183.197 61.9999 179.463 59.5703C176.263 57.4962 175.374 54.2962 175.374 48.6666V47.4221H187.463V47.5999C187.463 50.3851 187.878 51.4518 189.478 52.2814C191.078 53.111 194.812 53.4666 203.049 53.4666C212.53 53.4666 215.315 53.0518 216.797 52.3407C218.397 51.5703 218.812 50.6814 218.812 48.4888C218.812 46.474 218.278 45.3481 216.856 44.637C215.434 43.9258 212.471 43.8073 197.537 43.4518C188.174 43.2147 183.256 42.3851 180.293 40.5481C177.034 38.5332 175.789 35.2147 175.789 29.2295C175.789 23.1851 177.567 20.0444 180.826 18.0888C184.382 15.9555 190.545 15.0073 202.515 15.0073C213.3 15.0073 220.886 15.7777 224.856 18.3258C228.174 20.4592 228.826 24.0147 228.826 28.9925V29.8221H216.737V29.7629C216.737 27.6295 216.5 26.3258 214.9 25.5555C213.182 24.7258 209.923 24.4295 202.337 24.4295C193.982 24.4295 191.137 24.7258 189.656 25.437C188.056 26.2073 187.7 27.3925 187.7 29.0518C187.7 31.1851 188.471 32.074 189.537 32.6073C190.723 33.1999 192.678 33.437 204.056 33.674C216.974 33.911 222.782 34.5629 226.278 36.6962C229.597 38.711 230.663 42.4444 230.663 48.074C230.663 54.1184 229.123 57.4962 225.863 59.5703C222.604 61.6444 216.974 62.8888 202.693 62.8888Z'
            fill={colorClasses?.hex}
          />
          <path
            d='M228.668 61.9999L253.498 15.8962H268.965L293.794 61.9999H279.75L275.483 53.7629H246.209L241.943 61.9999H228.668ZM251.365 43.8073H270.328L260.846 25.5555L251.365 43.8073Z'
            fill={colorClasses?.hex}
          />
          <path
            d='M295.525 61.9999V15.8962H313.006L342.162 50.7999H342.281V15.8962H354.073V61.9999H336.888L307.495 26.8592H307.377V61.9999H295.525Z'
            fill={colorClasses?.hex}
          />
          <path
            d='M388.776 62.8888C364.776 62.8888 359.206 58.4444 359.206 38.9481C359.206 19.511 364.657 15.0073 389.309 15.0073C410.998 15.0073 416.746 18.2666 416.746 30.1777V30.8888H405.25V30.8295C405.25 26.1481 403.117 24.9629 388.835 24.9629C372.894 24.9629 371.294 26.7407 371.294 38.9481C371.294 51.0962 372.835 52.9333 388.776 52.9333C404.954 52.9333 405.902 51.4518 405.902 46.1184V45.2295H386.524V35.8073H417.22V46.1184C417.22 57.4962 414.85 62.8888 388.776 62.8888Z'
            fill={colorClasses?.hex}
          />
        </svg>
      </div>
      <div
        className={cn(
          'flex items-center justify-center rounded-full px-4 py-2',
          colorClasses?.bgColor
        )}
      >
        <RotatingText
          texts={['UX/UI Designer', 'Motion Designer', 'Creative Coder']}
          className='text-3xl font-bold text-white uppercase'
          staggerFrom={'last'}
          initial={{ y: '50%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-50%', opacity: 0 }}
          staggerDuration={0.025}
          splitLevelClassName='overflow-hidden'
          transition={{ type: 'spring', damping: 60, stiffness: 1000 }}
          rotationInterval={5000}
        />
      </div>
    </div>
  );
}
