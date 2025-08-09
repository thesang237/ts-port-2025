import Closer from '@/components/ui/Closer';
import Revealer from '@/components/ui/Revealer';

export default function Playground() {
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
