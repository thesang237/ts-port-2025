import Closer from '@/components/ui/Closer';
import Revealer from '@/components/ui/Revealer';

export default function Blogs() {
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
