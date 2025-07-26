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
    <div className='projects-layout grid min-h-screen grid-cols-9 gap-6 bg-black/0 pr-6'>
      {/* Left Panel: Filter Sidebar */}
      <ProjectsSidebar />

      {/* Right Panel: Conditional Content */}
      <main className='projects-content col-span-7 col-start-3 bg-red-300/0'>
        {children}
      </main>
    </div>
  );
};
