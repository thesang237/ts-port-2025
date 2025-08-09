import DetailProjectWrapper from '@/components/ui/DetailProjectWrapper';
import ProjectList from '@/components/ui/ProjectList';

export default function Motion() {
  return (
    <>
      <DetailProjectWrapper>
        <div className='header mb-8'>
          <h1 className='mb-2 text-3xl font-bold text-white'>
            Motion Projects
          </h1>
          <p className='text-stone-400'>Animation and motion design work</p>
        </div>
        <ProjectList filter='motion' />
      </DetailProjectWrapper>
    </>
  );
}
