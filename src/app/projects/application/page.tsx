'use client';

import ProjectList from '@/components/ui/ProjectList';

export default function Application() {
  return (
    <>
      <div className='project-detail-page'>
        <div className='header mb-8'>
          <h1 className='text-3xl font-bold text-white mb-2'>Application Projects</h1>
          <p className='text-stone-400'>Full-stack applications and web platforms</p>
        </div>
        <ProjectList filter="application" />
      </div>
    </>
  );
}
