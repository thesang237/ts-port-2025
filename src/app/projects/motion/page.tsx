'use client';

import ProjectList from '@/components/ui/ProjectList';

export default function Motion() {
  return (
    <>
      <div className='project-detail-page'>
        <div className='header mb-8'>
          <h1 className='text-3xl font-bold text-white mb-2'>Motion Projects</h1>
          <p className='text-stone-400'>Animation and motion design work</p>
        </div>
        <ProjectList filter="motion" />
      </div>
    </>
  );
}
