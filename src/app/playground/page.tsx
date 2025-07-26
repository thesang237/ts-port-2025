'use client';

import Closer from '@/components/ui/Closer';
import Revealer from '@/components/ui/Revealer';
import { useRevealer } from '@/hooks/useRevealer';

export default function Playground() {
  useRevealer();

  return (
    <>
      <Closer />
      <Revealer title='Playground' />
      <div className='playground-page'>
        <div className='header'>
          <h1>Playground</h1>
        </div>
      </div>
    </>
  );
}
