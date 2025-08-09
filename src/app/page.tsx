import Closer from '@/components/ui/Closer';

import HomePage from '@/modules/HomePage';
import Revealer from '@/components/ui/Revealer';

export default function Home() {
  return (
    <>
      <Closer />
      <Revealer title='Home' />
      <HomePage />
    </>
  );
}
