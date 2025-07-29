'use client';

import React, { ReactNode } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import HomeSidebar with no SSR to avoid useSearchParams issues
const HomeSidebar = dynamic(() => import('./HomeSidebar'), {
  ssr: false,
  loading: () => <div className='p-4'>Loading...</div>,
});

import { ToastProvider } from '@/components/ui/ToastProvider';
// import MainBackground from './MainBackground';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = React.memo(({ children }) => {
  return (
    <ToastProvider>
      {/* <PageLoader /> */}
      <div className='h-screen w-screen overflow-hidden scroll-smooth bg-gray-950'>
        {/* Fixed Fullscreen Background Layer */}
        {/* <WrapSilk /> */}
        {/* <MainBackground /> */}

        {/* Fixed Navigation Bar - Now with glass-nav class */}
        <nav className='fixed top-0 right-0 left-0 z-50 h-[var(--header-height-desktop)]'>
          <div className='glass-nav flex h-full items-center justify-between px-6'>
            <div className='text-lg font-bold text-gray-50 uppercase'>
              Portfolio
            </div>
            <div className='flex items-center space-x-4'>
              <button className='text-sm text-gray-50 transition-colors hover:text-gray-200'>
                @thesang_motion
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content Container */}
        <div className='fixed top-12 right-6 bottom-12 left-6 grid grid-cols-12 gap-6 bg-red-500/0'>
          {/* Sidebar - Now with glass-sidebar class */}
          <aside className='col-span-3 flex flex-col overflow-hidden rounded-2xl'>
            <div className='flex-1'>
              <HomeSidebar />
            </div>
          </aside>

          {/* Main Content Section - Now with glass-content class */}
          <section className='glass-content relative col-span-9 flex flex-col overflow-hidden rounded-3xl'>
            <div className='flex-1 overflow-y-auto bg-red-500/0'>
              {children}
            </div>
          </section>
        </div>

        {/* Fixed Footer Bar - Now with glass-footer class */}
        <footer className='fixed right-0 bottom-0 left-0 z-50 h-[var(--footer-height-desktop)]'>
          <div className='glass-footer flex h-full items-center justify-between !px-6 text-white'>
            <div className='bg-blue-500/0 text-sm'>© 2025</div>
            <div className='flex items-center gap-2 space-x-4 text-sm'>
              <span>Built with Next.js</span>
              <div className='h-2 w-2 animate-pulse rounded-full bg-green-400' />
            </div>
          </div>
        </footer>
      </div>
    </ToastProvider>
  );
});

MainLayout.displayName = 'MainLayout';

export default MainLayout;
