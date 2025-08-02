'use client';

import ProjectList from '@/components/ui/ProjectList';

export default function Branding() {
  return (
    <>
      <div className='project-detail-page'>
        <div className='header mb-8'>
          <h1 className='text-3xl font-bold text-white mb-2'>Branding Projects</h1>
          <p className='text-stone-400'>Brand identity and visual design work</p>
        </div>
        <ProjectList filter="branding" />
      </div>
    </>
  );
}
