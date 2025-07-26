'use client';

import Closer from '@/components/ui/Closer';
import Revealer from '@/components/ui/Revealer';

export default function Projects() {
  return (
    <>
      <Closer />
      <Revealer title='Projects' />
      <div className='projects-page'>
        <div className='header'>
          <h1>Projects</h1>
        </div>
      </div>
    </>
  );
}
