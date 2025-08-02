'use client';

import Closer from '@/components/ui/Closer';
import Revealer from '@/components/ui/Revealer';
import ProjectList from '@/components/ui/ProjectList';

export default function Projects() {
  return (
    <>
      <Closer />
      <Revealer title='Projects' />
      <div className='projects-page'>
        <div className='header mb-8'>
          <h1 className='text-3xl font-bold text-white mb-2'>Projects</h1>
          <p className='text-stone-400'>Explore my latest work across different categories</p>
        </div>
        <ProjectList filter="all" />
      </div>
    </>
  );
}
