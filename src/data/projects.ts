import { Project } from '@/types/projects';

export const projects: Project[] = [
  // Application Projects
  {
    id: 'app-1',
    title: 'Task Management App',
    description: 'A comprehensive task management application with real-time collaboration features.',
    category: 'application',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    year: 2024,
  },
  {
    id: 'app-2',
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration and inventory management.',
    category: 'application',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
    year: 2024,
  },
  {
    id: 'app-3',
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management and performance tracking.',
    category: 'application',
    technologies: ['Vue.js', 'D3.js', 'Express', 'MySQL'],
    year: 2023,
  },

  // Landing Page Projects
  {
    id: 'landing-1',
    title: 'SaaS Landing Page',
    description: 'Modern landing page for a SaaS product with conversion optimization.',
    category: 'landing',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    year: 2024,
  },
  {
    id: 'landing-2',
    title: 'Portfolio Website',
    description: 'Creative portfolio website with smooth animations and responsive design.',
    category: 'landing',
    technologies: ['React', 'GSAP', 'SCSS'],
    year: 2024,
  },
  {
    id: 'landing-3',
    title: 'Product Launch Page',
    description: 'High-converting product launch page with countdown timer and testimonials.',
    category: 'landing',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    year: 2023,
  },

  // Branding Projects
  {
    id: 'brand-1',
    title: 'Tech Startup Brand Identity',
    description: 'Complete brand identity design including logo, color palette, and guidelines.',
    category: 'branding',
    technologies: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
    year: 2024,
  },
  {
    id: 'brand-2',
    title: 'Restaurant Brand Package',
    description: 'Brand identity and marketing materials for a modern restaurant chain.',
    category: 'branding',
    technologies: ['Adobe Creative Suite', 'InDesign'],
    year: 2024,
  },
  {
    id: 'brand-3',
    title: 'Fitness App Brand Design',
    description: 'Visual identity and UI design system for a fitness tracking application.',
    category: 'branding',
    technologies: ['Figma', 'Adobe XD'],
    year: 2023,
  },

  // Coding Projects
  {
    id: 'code-1',
    title: 'Algorithm Visualization Tool',
    description: 'Interactive tool for visualizing sorting and pathfinding algorithms.',
    category: 'coding',
    technologies: ['Python', 'Pygame', 'NumPy'],
    year: 2024,
  },
  {
    id: 'code-2',
    title: 'Machine Learning Library',
    description: 'Custom machine learning library with neural network implementations.',
    category: 'coding',
    technologies: ['Python', 'TensorFlow', 'NumPy', 'Pandas'],
    year: 2024,
  },
  {
    id: 'code-3',
    title: 'Data Processing Pipeline',
    description: 'High-performance data processing pipeline for large datasets.',
    category: 'coding',
    technologies: ['Python', 'Apache Spark', 'Docker', 'Kubernetes'],
    year: 2023,
  },

  // Motion Projects
  {
    id: 'motion-1',
    title: 'Product Animation',
    description: 'Smooth product reveal animation with particle effects and transitions.',
    category: 'motion',
    technologies: ['After Effects', 'Cinema 4D', 'Adobe Premiere'],
    year: 2024,
  },
  {
    id: 'motion-2',
    title: 'UI Motion Design',
    description: 'Micro-interactions and animations for mobile app interface.',
    category: 'motion',
    technologies: ['Framer Motion', 'Lottie', 'Principle'],
    year: 2024,
  },
  {
    id: 'motion-3',
    title: 'Explainer Video',
    description: 'Animated explainer video for a fintech product launch.',
    category: 'motion',
    technologies: ['After Effects', 'Illustrator', 'Photoshop'],
    year: 2023,
  },
];

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') {
    return projects;
  }
  return projects.filter(project => project.category === category);
}; 