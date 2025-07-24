'use client';

import Closer from '@/components/ui/Closer';
import Revealer from '@/components/ui/Revealer';
import { useRevealer } from '@/hooks/useRevealer';

export default function Blogs() {
  useRevealer();

  return (
    <>
      <Closer />
      <Revealer title='Blogs' />
      <div className='blogs-page'>
        <div className='header'>
          <h1>Blogs</h1>
        </div>
      </div>
    </>
  );
}
