import DetailProjectWrapper from '@/components/ui/DetailProjectWrapper';
import ProjectList from '@/components/ui/ProjectList';

export default function Branding() {
  return (
    <>
      <DetailProjectWrapper>
        <div className='header mb-8'>
          <h1 className='mb-2 text-3xl font-bold text-white'>
            Branding Projects
          </h1>
          <p className='text-stone-400'>
            Brand identity and visual design work
          </p>
        </div>
        <ProjectList filter='branding' />
      </DetailProjectWrapper>
    </>
  );
}
