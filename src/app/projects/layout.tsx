import ProjectsSidebar from '@/components/ui/ProjectsSidebar';

export default function ProjectsLayoutRoot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ProjectsLayout>{children}</ProjectsLayout>;
}

const ProjectsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      id='projects-layout'
      className='grid h-full grid-cols-9 gap-6 overflow-y-hidden bg-black/30 pr-6 backdrop-blur-3xl'
    >
      {/* Left Panel: Filter Sidebar */}
      <ProjectsSidebar />

      {/* Right Panel: Conditional Content */}
      <main className='projects-content col-span-7 col-start-3 bg-red-300/0'>
        {children}
      </main>
    </div>
  );
};
