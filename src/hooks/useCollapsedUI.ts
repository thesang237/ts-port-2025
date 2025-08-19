import { usePathname } from 'next/navigation';

export const useCollapsedUI = () => {
  const pathname = usePathname();
  return pathname.includes('/projects');
};
