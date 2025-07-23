'use client';

import Link from 'next/link';
import { useTransitionRouter } from 'next-view-transitions';
import { usePathname } from 'next/navigation';

const Nav = () => {
  const router = useTransitionRouter();
  const pathname = usePathname();

  function triggerPageTransition(href: string) {
    document.documentElement.animate(
      [
        {
          clipPath: 'polygon(25% 75%, 75% 75%, 75% 75%, 25% 75%)',
        },
        {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        },
      ],
      {
        duration: 1000,
        easing: 'cubic-bezier(0.9, 0.0, 0.1, 1.0)',
        pseudoElement: '::view-transition-new(root)',
      }
    );
    // document.documentElement.animate(
    //   [
    //     {
    //       clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
    //     },
    //     {
    //       clipPath: 'polygon(25% 25%, 75% 25%, 75% 25%, 25% 25%)',
    //       // clipPath: 'polygon(0% 50%, 25% 50%, 75% 50%, 100% 50%)',
    //     },
    //   ],
    //   {
    //     duration: 1000,
    //     easing: 'cubic-bezier(0.9, 0.0, 0.1, 1.0)',
    //     pseudoElement: '::view-transition-old(root)',
    //   }
    // );
  }

  const handleNavigation =
    (path: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (path === pathname) {
        e.preventDefault();
        return;
      }

      router.push(path, {
        onTransitionReady: () => triggerPageTransition(path),
      });
    };

  return (
    <div className='nav'>
      <div className='col'>
        <div className='nav-logo'>
          <Link href='/' onClick={handleNavigation('/')}>
            thesang
          </Link>
        </div>
      </div>
      <div className='col'>
        <div className='nav-items'>
          <div className='nav-item'>
            <Link href='/work' onClick={handleNavigation('/work')}>
              Work
            </Link>
          </div>
          <div className='nav-item'>
            <Link href='/about' onClick={handleNavigation('/about')}>
              About
            </Link>
          </div>
          <div className='nav-item'>
            <Link href='/contact' onClick={handleNavigation('/contact')}>
              Contact
            </Link>
          </div>
        </div>
        <div className='nav-copy'>
          <p>
            &copy; {new Date().getFullYear()} The Sang. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
