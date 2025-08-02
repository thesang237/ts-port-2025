'use client';

import { cn, getColorClasses } from '@/lib/utils';
import { motion, Variants } from 'framer-motion';
import { Project, ProjectFilter } from '@/types/projects';
import { getProjectsByCategory } from '@/data/projects';
import { ColorTheme, useThemeStore } from '@/store/useThemeStore';

interface ProjectListProps {
  filter: ProjectFilter;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function ProjectList({ filter }: ProjectListProps) {
  const projects = getProjectsByCategory(filter);
  const activeColor = useThemeStore(state => state.activeColor);
  const colorClasses = getColorClasses(activeColor as ColorTheme);

  if (projects.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center">
        <p className="text-stone-400">No projects found for this category.</p>
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} colorClasses={colorClasses} />
      ))}
    </motion.div>
  );
}

interface ProjectCardProps {
  project: Project;
  colorClasses: ReturnType<typeof getColorClasses> | undefined;
}

function ProjectCard({ project, colorClasses }: ProjectCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative overflow-hidden rounded-2xl bg-stone-900/50 backdrop-blur-sm border border-stone-800/50 hover:border-stone-700/50 transition-all duration-300"
    >
      {/* Project Image Placeholder */}
      <div className="aspect-video bg-gradient-to-br from-stone-800 to-stone-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
          {project.year && (
            <span className="text-sm text-stone-300">{project.year}</span>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <p className="text-stone-300 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Technologies */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className={cn(
                    'px-2 py-1 text-xs rounded-full border',
                    colorClasses?.border || 'border-stone-700',
                    'text-stone-300'
                  )}
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 py-1 text-xs rounded-full border border-stone-700 text-stone-500">
                  +{project.technologies.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="flex justify-between items-center">
          <button
            className={cn(
              'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
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
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-white transition-colors duration-200"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
} 