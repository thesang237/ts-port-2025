'use client';

import { cn, getColorClasses } from '@/lib/utils';
import { easeInOut, easeOut, motion, Variants } from 'framer-motion';
import { Project, ProjectFilter } from '@/types/projects';
import { getProjectsByCategory } from '@/data/projects';
import { ColorTheme, useThemeStore } from '@/store/useThemeStore';
import Link from 'next/link';
import { unstable_ViewTransition as ViewTransition } from 'react';

interface ProjectListProps {
  filter: ProjectFilter;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: easeOut,
    },
  },
};

export default function ProjectList({ filter }: ProjectListProps) {
  const projects = getProjectsByCategory(filter);
  const activeColor = useThemeStore(state => state.activeColor);
  const colorClasses = getColorClasses(activeColor as ColorTheme);

  if (projects.length === 0) {
    return (
      <div className='flex h-64 items-center justify-center'>
        <p className='text-stone-400'>No projects found for this category.</p>
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'
    >
      {projects.map(project => (
        <ProjectCard
          key={project.id}
          project={project}
          colorClasses={colorClasses}
        />
      ))}
    </motion.div>
  );
}

interface ProjectCardProps {
  project: Project;
  colorClasses: ReturnType<typeof getColorClasses> | undefined;
}

const MotionLink = motion(Link);

function ProjectCard({ project, colorClasses }: ProjectCardProps) {
  return (
    // <motion.div variants={itemVariants}>
    <MotionLink
      variants={itemVariants}
      href={`/projects/application/${project.id}`}
      className='group relative overflow-hidden rounded-4xl border border-stone-800/50 bg-stone-900/50 backdrop-blur-sm transition-none duration-300 hover:border-stone-700/50'
    >
      {/* Project Image Placeholder */}
      <div className='relative aspect-video overflow-hidden bg-gradient-to-br from-stone-800 to-stone-900'>
        <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent'>
          {project.image && (
            <ViewTransition name={`${project.id}-banner`}>
              <img
                src={project.image}
                alt={project.title}
                className='h-auto w-full rounded-4xl object-cover'
              />
            </ViewTransition>
          )}
        </div>
        <div className='absolute right-4 bottom-4 left-4'>
          <h3 className='mb-1 text-lg font-semibold text-white'>
            {project.title}
          </h3>
          {project.year && (
            <span className='text-sm text-stone-300'>{project.year}</span>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className='p-6'>
        <p className='mb-4 text-sm leading-relaxed text-stone-300'>
          {project.description}
        </p>

        {/* Technologies */}
        {project.technologies && project.technologies.length > 0 && (
          <div className='mb-4'>
            <div className='flex flex-wrap gap-2'>
              {project.technologies.slice(0, 3).map(tech => (
                <span
                  key={tech}
                  className={cn(
                    'rounded-full border px-2 py-1 text-xs',
                    colorClasses?.border || 'border-stone-700',
                    'text-stone-300'
                  )}
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className='rounded-full border border-stone-700 px-2 py-1 text-xs text-stone-500'>
                  +{project.technologies.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className='flex items-center justify-between'>
          <button
            className={cn(
              'rounded-full px-4 py-2 text-sm font-medium transition-all duration-200',
              colorClasses?.bgColor || 'bg-stone-800',
              'text-white',
              'hover:scale-105 active:scale-95'
            )}
          >
            View Project
          </button>

          {project.link && (
            <a
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className='text-stone-400 transition-colors duration-200 hover:text-white'
            >
              <svg
                className='h-5 w-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Hover Effect */}
      <div className='pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
    </MotionLink>
    // </motion.div>
  );
}
