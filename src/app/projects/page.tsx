import Closer from '@/components/ui/Closer';
import Revealer from '@/components/ui/Revealer';
import ProjectList from '@/components/ui/ProjectList';
import DetailProjectWrapper from '@/components/ui/DetailProjectWrapper';

export default function Projects() {
  return (
    <>
      <Closer />
      <Revealer title='Projects' />

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
