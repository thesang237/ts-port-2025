'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { cn, getColorClasses } from '@/lib/utils';
import { ColorTheme, useThemeStore } from '@/store/useThemeStore';
import ColorSwitcherWrapper from '@/components/controls/ColorSwitcherWrapper';
import SidebarSocialButtons from '@/components/controls/SidebarSocialButtons';
import ProfileSection from '@/components/ui/ProfileSection';
import { CircleUser, Briefcase, CodeXml, BookOpen, Star } from 'lucide-react';
import { motion } from 'framer-motion';

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

  const navRef = useRef<HTMLElement>(null);
  const menuRefs = useRef<{ [key: string]: HTMLAnchorElement }>({});

  // View Transition Navigation
  function triggerPageTransition(href: string) {
    if ('startViewTransition' in document) {
      document.startViewTransition(() => {
        router.push(href);
      });
    } else {
      router.push(href);
    }
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
        <div className='col-span-1 flex flex-col gap-6'>
          <ColorSwitcherWrapper />
          <SidebarSocialButtons />
        </div>

        <nav
          ref={navRef}
          className='glass-sidebar relative col-span-2 space-y-1 p-2'
        >
          {menuItems.map(({ slug, label, icon: Icon }) => {
            const isActive = pathname === slug;

            return (
              <Link
                key={slug}
                href={slug}
                ref={el => {
                  if (el) menuRefs.current[slug] = el;
                }}
                onClick={handleNavigation(slug)}
                className={cn(
                  'relative flex h-12 w-full items-center gap-3 rounded-full px-4 py-3 text-left transition-colors duration-200',
                  isActive && 'z-10'
                )}
              >
                {isActive ? (
                  <motion.div
                    layoutId='active-menu-bg'
                    className={cn(
                      'pointer-events-none absolute top-0 left-0 z-0 h-full w-full rounded-full',
                      colorClasses.bg
                    )}
                  />
                ) : null}

                <Icon
                  size={24}
                  className={cn(
                    'z-1 transition-colors duration-200',
                    isActive ? 'text-white' : 'text-stone-300'
                  )}
                />
                <span
                  className={cn(
                    'z-1 transition-colors duration-200',
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
      </div>
    </div>
  );
});

HomeSidebar.displayName = 'HomeSidebar';

export default HomeSidebar;
