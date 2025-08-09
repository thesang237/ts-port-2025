import Closer from '@/components/ui/Closer';
import dynamic from 'next/dynamic';

const HomePage = dynamic(() => import('@/modules/HomePage'), {
  ssr: false,
  loading: () => (
    <div className='fixed inset-0 z-50 flex items-center justify-center'></div>
  ),
});
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
