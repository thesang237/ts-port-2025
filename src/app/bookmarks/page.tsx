'use client';

import Closer from '@/components/ui/Closer';
import Revealer from '@/components/ui/Revealer';
import { useRevealer } from '@/hooks/useRevealer';

export default function Bookmarks() {
  useRevealer();

  return (
    <>
      <Closer />
      <Revealer title='Bookmarks' />
      <div className='bookmarks-page'>
        <div className='header'>
          <h1>Bookmarks</h1>
        </div>
      </div>
    </>
  );
}
