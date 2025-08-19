import Closer from '@/components/ui/Closer';
import Revealer from '@/components/ui/Revealer';

export default function Bookmarks() {
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
