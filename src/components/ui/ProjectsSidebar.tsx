'use client';

import { cn, getColorClasses } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ColorTheme, useThemeStore } from '@/store/useThemeStore';

const filters = [
  // { id: 'all', label: 'All Projects' },
  { id: 'application', label: 'Application' },
  { id: 'landing', label: 'Landing' },
  { id: 'branding', label: 'Branding' },
  { id: 'coding', label: 'Coding' },
  { id: 'motion', label: 'Motion' },
];

export default function ProjectsSidebar() {
  // const handleFilterClick = (filter: string) => {};
  const pathname = usePathname();
  const activeColor = useThemeStore(state => state.activeColor);
  const colorClasses = getColorClasses(activeColor as ColorTheme);

  return (
    <aside className='sticky top-0 z-10 col-span-2 flex h-[calc(100vh-var(--header-height-desktop)*2-2px)] flex-col overflow-hidden bg-blue-500/0 p-4 pr-0'>
      <nav className='glass-projects-sidebar col-span-2 h-full space-y-1 p-2'>
        {filters.map(({ id, label }) => {
          const isActive =
            pathname === `/projects/${id}` ||
            (pathname === '/projects' && id === 'application');

          const linkHref = id === 'all' ? '/projects' : `/projects/${id}`;

          const content = (
            <>
              {isActive ? (
                <motion.div
                  layoutId='active-filter-bg'
                  className={cn(
                    'pointer-events-none absolute top-0 left-0 z-0 h-full w-full rounded-full',
                    colorClasses?.bgColor
                  )}
                />
              ) : null}
              <span
                className={cn(
                  'z-1 transition-colors duration-200',
                  isActive ? 'text-white' : 'text-stone-300 hover:text-stone-50'
                )}
              >
                {label}
              </span>
            </>
          );

          return (
            <Link
              key={id}
              href={linkHref}
              aria-current={isActive ? 'page' : undefined}
              onClick={e => {
                if (isActive) {
                  e.preventDefault();
                }
              }}
              className={cn(
                'relative flex h-12 w-full items-center gap-3 rounded-full px-4 py-3 text-left transition-colors duration-200',
                isActive && 'z-10'
              )}
            >
              {content}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
