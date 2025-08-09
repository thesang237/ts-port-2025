import DetailProjectWrapper from '@/components/ui/DetailProjectWrapper';
import ProjectList from '@/components/ui/ProjectList';

export default function Landing() {
  return (
    <>
      <DetailProjectWrapper>
        <div className='header mb-8'>
          <h1 className='mb-2 text-3xl font-bold text-white'>
            Landing Page Projects
          </h1>
          <p className='text-stone-400'>
            High-converting landing pages and websites
          </p>
        </div>
        <ProjectList filter='landing' />
      </DetailProjectWrapper>
    </>
  );
}
