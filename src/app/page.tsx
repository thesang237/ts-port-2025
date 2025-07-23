'use client';

import { useRevealer } from '@/hooks/useRevealer';
import Revealer from '@/components/ui/Revealer';
import HomePage from '@/modules/HomePage';

export default function Home() {
  useRevealer();

  return (
    <>
      <Revealer title='Home' />
      <HomePage />
    </>
  );
}
