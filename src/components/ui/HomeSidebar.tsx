'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { cn, getColorClasses } from '@/lib/utils';
import { ColorTheme, useThemeStore } from '@/store/useThemeStore';
import ColorSwitcherWrapper from '@/components/controls/ColorSwitcherWrapper';
import SidebarSocialButtons from '@/components/controls/SidebarSocialButtons';
import ProfileSection from '@/components/ui/ProfileSection';
import { CircleUser, Briefcase, CodeXml, BookOpen, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCloser } from '@/hooks/useCloser';
import { CLOSER_DURATION } from '@/constants/motion';
import { unstable_ViewTransition as ViewTransition } from 'react';
import { useCollapsedUI } from '@/hooks/useCollapsedUI';

interface MenuItem {
  label: string;
  slug: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const menuItems: MenuItem[] = [
  { label: 'Home', slug: '/', icon: CircleUser },
  { label: 'Projects', slug: '/projects', icon: Briefcase },
  { label: 'Playground', slug: '/playground', icon: CodeXml },
  { label: 'Blogs', slug: '/blogs', icon: BookOpen },
  { label: 'Bookmarks', slug: '/bookmarks', icon: Star },
];

const HomeSidebar = React.memo(() => {
  const router = useRouter();
  const pathname = usePathname();
  const activeColor = useThemeStore(state => state.activeColor);
  const colorClasses = getColorClasses(activeColor as ColorTheme);
  const triggerCloser = useCloser();
  const isCollapsedUI = useCollapsedUI();

  // View Transition Navigation
  function triggerPageTransition(href: string) {
    triggerCloser();

    setTimeout(
      () => {
        router.push(href);
      },
      (CLOSER_DURATION - 0.2) * 1000
    );
  }

  const handleNavigation =
    (path: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (path === pathname) {
        e.preventDefault();
        return;
      }

      e.preventDefault();
      triggerPageTransition(path);
    };

  return (
    <div className='flex flex-col gap-6'>
      <ProfileSection />

      <div className='grid grid-cols-3 gap-6'>
        <ViewTransition name='vt-sidebar-controls'>
          <div
            className={cn(
              'h-auto flex-col gap-6',
              isCollapsedUI ? 'hidden' : 'col-span-1 flex'
            )}
          >
            <ColorSwitcherWrapper />
            <SidebarSocialButtons />
          </div>
        </ViewTransition>
        <ViewTransition name='vt-sidebar-menu'>
          <nav
            className={cn(
              'glass-sidebar relative space-y-1 p-2',
              isCollapsedUI ? 'col-span-3' : 'col-span-2'
            )}
          >
            {menuItems.map(({ slug, label, icon: Icon }) => {
              const isActive =
                slug === '/' ? pathname === slug : pathname.includes(slug);

              return (
                <Link
                  key={slug}
                  href={slug}
                  onClick={handleNavigation(slug)}
                  className={cn(
                    'group relative flex h-12 w-full items-center gap-3 rounded-full px-4 py-3 text-left transition-all duration-200 ease-out',
                    isActive ? 'z-10' : 'hover:bg-white/5'
                  )}
                >
                  {isActive ? (
                    <motion.div
                      layoutId='active-menu-bg'
                      className={cn(
                        'pointer-events-none absolute top-0 left-0 z-0 h-full w-full rounded-full',
                        colorClasses?.bgColor
                      )}
                    />
                  ) : null}

                  <Icon
                    size={24}
                    className={cn(
                      'z-1 transition-colors duration-200 group-hover:text-white',
                      isActive ? 'text-white' : 'text-stone-300'
                    )}
                  />
                  <span
                    className={cn(
                      'z-1 transition-colors duration-200 group-hover:text-white',
                      isActive
                        ? 'text-white'
                        : 'text-stone-300 hover:text-stone-50'
                    )}
                  >
                    {label}
                  </span>
                </Link>
              );
            })}
          </nav>
        </ViewTransition>
      </div>
      <div className=' flex flex-col gap-2 text-center p-2'>
        <p className='text-stone-300'>Project in development</p>
      </div>
    </div>
  );
});

HomeSidebar.displayName = 'HomeSidebar';

export default HomeSidebar;
