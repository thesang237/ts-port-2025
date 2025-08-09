import ProjectList from '@/components/ui/ProjectList';

export default function Landing() {
  return (
    <>
      <div className='project-detail-page'>
        <div className='header mb-8'>
          <h1 className='text-3xl font-bold text-white mb-2'>Landing Page Projects</h1>
          <p className='text-stone-400'>High-converting landing pages and websites</p>
        </div>
        <ProjectList filter="landing" />
      </div>
    </>
  );
}
