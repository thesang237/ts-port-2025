import DetailProjectWrapper from '@/components/ui/DetailProjectWrapper';
import ProjectList from '@/components/ui/ProjectList';

export default function Application() {
  return (
    <>
      <DetailProjectWrapper>
        <div className='header mb-8'>
          <h1 className='mb-2 text-3xl font-bold text-white'>
            Application Projects
          </h1>
          <p className='text-stone-400'>
            Full-stack applications and web platforms
          </p>
        </div>
        <ProjectList filter='application' />
      </DetailProjectWrapper>
    </>
  );
}
