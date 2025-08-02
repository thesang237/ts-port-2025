'use client';

import ProjectList from '@/components/ui/ProjectList';

export default function Coding() {
  return (
    <>
      <div className='project-detail-page'>
        <div className='header mb-8'>
          <h1 className='text-3xl font-bold text-white mb-2'>Coding Projects</h1>
          <p className='text-stone-400'>Algorithm implementations and technical solutions</p>
        </div>
        <ProjectList filter="coding" />
      </div>
    </>
  );
}
