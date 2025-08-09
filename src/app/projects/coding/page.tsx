import DetailProjectWrapper from '@/components/ui/DetailProjectWrapper';
import ProjectList from '@/components/ui/ProjectList';

export default function Coding() {
  return (
    <>
      <DetailProjectWrapper>
        <div className='header mb-8'>
          <h1 className='mb-2 text-3xl font-bold text-white'>
            Coding Projects
          </h1>
          <p className='text-stone-400'>
            Algorithm implementations and technical solutions
          </p>
        </div>
        <ProjectList filter='coding' />
      </DetailProjectWrapper>
    </>
  );
}
