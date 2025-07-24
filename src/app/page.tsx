'use client';

import { useRevealer } from '@/hooks/useRevealer';
import Revealer from '@/components/ui/Revealer';
import HomePage from '@/modules/HomePage';
import Closer from '@/components/ui/Closer';

export default function Home() {
  useRevealer();

  return (
    <>
      <Closer />
      <Revealer title='Home' />
      <HomePage />
    </>
  );
}
