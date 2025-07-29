'use client';

import SplitText from '@/components/ui/SplitText';
import { PAGE_LOADER_DURATION } from '@/constants/motion';
import AnimatedContent from '@/components/ui/AnimatedContent';
import { ColorTheme, useThemeStore } from '@/store/useThemeStore';
import { cn, getColorClasses } from '@/lib/utils';

// ============================================================================
// HEADER COMPONENT
// ============================================================================

interface HeaderProps {
  colorClasses: ReturnType<typeof getColorClasses>;
}

const Header: React.FC<HeaderProps> = ({ colorClasses }) => {
  return (
    <div className='space-y-8'>
      {/* Title and decorative line */}
      <div className='relative'>
        <SplitText
          as='h1'
          className={cn(
            'text-5xl leading-[1.2] font-bold tracking-wide uppercase',
            colorClasses?.text
          )}
          delay={PAGE_LOADER_DURATION + 0.15}
          stagger={25}
          duration={0.6}
          ease='power3.out'
          splitType='chars'
          from={{ opacity: 0, y: 30 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin='-100px'
          textAlign='left'
          onLetterAnimationComplete={() => {}}
        >
          Crafting Exceptional
          <br />
          Digital Experiences
        </SplitText>
        <div
          className={cn(
            'absolute top-[89px] right-0 h-[1px] w-3/12',
            colorClasses?.text
          )}
        ></div>
      </div>

      {/* Avatar and description */}
      <AnimatedContent
        distance={50}
        direction='up'
        duration={0.8}
        delay={PAGE_LOADER_DURATION + 0.4}
      >
        <div className='flex items-center gap-6'>
          <div
            className={cn(
              'relative h-[134px] w-[134px] flex-shrink-0 overflow-hidden rounded-3xl shadow-inner',
              colorClasses?.bgColor
            )}
          >
            <div
              className='absolute -top-1 -left-6 h-[179px] w-[179px] overflow-hidden rounded-full bg-cover bg-center'
              style={{
                backgroundImage: "url('/avatar.png')",
                backgroundSize: '100% auto',
                mixBlendMode: 'hard-light',
              }}
            ></div>
          </div>
          <p className='flex-1 text-2xl leading-[1.5]'>
            I design user-centric, visually stunning, and interactive interfaces
            that bring value to both businesses and users.
          </p>
        </div>
      </AnimatedContent>
    </div>
  );
};

// ============================================================================
// ABOUT ME COMPONENT
// ============================================================================

interface AboutMeProps {
  colorClasses: ReturnType<typeof getColorClasses>;
}

const AboutMe: React.FC<AboutMeProps> = ({ colorClasses }) => {
  return (
    <AnimatedContent
      distance={50}
      direction='up'
      duration={0.8}
      delay={PAGE_LOADER_DURATION + 0.5}
    >
      <div className='space-y-4'>
        <div className={cn('border-b pb-2', colorClasses?.border)}>
          <h2 className={cn('text-3xl font-medium', colorClasses?.text)}>
            About Me
          </h2>
        </div>
        <div className='pl-40'>
          <p className='leading-relaxed'>
            With over 5 years of experience as a full-time designer and
            freelancer, I specialize in creating intuitive and engaging user
            interfaces that not only look great but also deliver real value to
            businesses and users. My expertise lies in UI, visual, and
            interaction design, with a passion for crafting seamless digital
            experiences. I&apos;m always eager to expand my knowledge in UX and
            user-centric applications to ensure my designs solve real problems.
          </p>
        </div>
      </div>
    </AnimatedContent>
  );
};

// ============================================================================
// SKILL TAG COMPONENT
// ============================================================================

interface SkillTagProps {
  skill: string;
  colorClasses: ReturnType<typeof getColorClasses>;
}

const SkillTag: React.FC<SkillTagProps> = ({ skill, colorClasses }) => {
  return (
    <span
      className={cn(
        'rounded-full border px-10 py-2 font-semibold',
        colorClasses?.border,
        colorClasses?.text
      )}
    >
      {skill}
    </span>
  );
};

// ============================================================================
// SKILLS SECTION COMPONENT
// ============================================================================

interface SkillsSectionProps {
  colorClasses: ReturnType<typeof getColorClasses>;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ colorClasses }) => {
  const skillCategories = [
    {
      title: 'Design',
      skills: [
        ['UX / UI', '2D Motion', 'Branding'],
        ['Lottie Animation', 'UI Interaction'],
      ],
    },
    {
      title: 'Development',
      skills: [
        ['HTML', 'CSS', 'Javascript'],
        ['ReactJS', 'NextJS'],
      ],
    },
    {
      title: 'Creative Coding',
      skills: [
        ['P5JS', 'ThreeJS'],
        ['Framer Motion', 'GSAP'],
      ],
    },
  ];

  return (
    <AnimatedContent
      distance={50}
      direction='up'
      duration={0.8}
      delay={PAGE_LOADER_DURATION + 0.6}
    >
      <div className='space-y-6'>
        <div className={cn('border-b pb-2', colorClasses?.border)}>
          <h2 className={cn('text-3xl font-medium', colorClasses?.text)}>
            Skills
          </h2>
        </div>

        <div className='space-y-8 pl-40'>
          {skillCategories.map(category => (
            <div key={category.title} className='space-y-2'>
              <h3 className='text-sm font-bold tracking-wider uppercase'>
                {category.title}
              </h3>
              <div className='space-y-2'>
                {category.skills.map((skillRow, rowIndex) => (
                  <div key={rowIndex} className='flex flex-wrap gap-2'>
                    {skillRow.map(skill => (
                      <SkillTag
                        key={skill}
                        skill={skill}
                        colorClasses={colorClasses}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedContent>
  );
};

// ============================================================================
// WORK EXPERIENCE ITEM COMPONENT
// ============================================================================

interface WorkExperienceItemProps {
  period: string;
  title: string;
  company: string;
  responsibilities: string[];
  colorClasses: ReturnType<typeof getColorClasses>;
}

const WorkExperienceItem: React.FC<WorkExperienceItemProps> = ({
  period,
  title,
  company,
  responsibilities,
  colorClasses,
}) => {
  return (
    <div className='space-y-4'>
      <div className='flex flex-col items-start gap-2'>
        <div className='space-y-2'>
          <p className='text-sm font-bold tracking-wider uppercase'>{period}</p>
          <h3 className={cn('text-xl font-medium', colorClasses?.text)}>
            {title}
          </h3>
        </div>
        <span
          className={cn(
            'mt-1 rounded-full px-3 py-1 text-sm font-bold',
            colorClasses?.bgColor
          )}
        >
          {company}
        </span>
      </div>
      <div className='space-y-1'>
        {responsibilities.map((responsibility, index) => (
          <p key={index}>{responsibility}</p>
        ))}
      </div>
    </div>
  );
};

// ============================================================================
// WORK EXPERIENCE SECTION COMPONENT
// ============================================================================

interface WorkExperienceSectionProps {
  colorClasses: ReturnType<typeof getColorClasses>;
}

const WorkExperienceSection: React.FC<WorkExperienceSectionProps> = ({
  colorClasses,
}) => {
  const workExperience = [
    {
      period: '2023 → Present',
      title: 'Creative Designer & Developer',
      company: 'Autonomous Inc.',
      responsibilities: [
        '• Brainstorm and develop generative art collection on blockchain using creative coding tools and languages like Canvas, P5JS, ThreeJS.',
        '• Design creative and interactive landing pages and web experience.',
        '• Design UI for AI agent web application and Web3 projects.',
        '• Draw and animate icons, visual elements to enhance user experience.',
      ],
    },
    {
      period: '2022 → 2023',
      title: 'Middle UX/UI Designer',
      company: 'Extracy Inc.',
      responsibilities: [
        "• Analyze PO's requirements of blockchain app features",
        '• Conduct market research, create user flows, wireframes, and mockups.',
        '• Provide essential visual assets, from graphic design to creative coding.',
        '• Collaborate with designers & developers to ensure a successful product build.',
      ],
    },
    {
      period: '2020 → 2022',
      title: 'UX/UI Designer',
      company: 'Solazu Technology',
      responsibilities: [
        '• Support senior in applying design language & system',
        '• Draft wireframes & final mockups for new features',
        '• Support developers in UI building & testing',
        '• Design UI assets (icon & illustration) from 2D to 3D',
      ],
    },
    {
      period: '2020 → Present',
      title: 'Visual Designer',
      company: 'Freelance',
      responsibilities: [
        "• Conduct extensive research on client's problems & needs in order to provide tailored visual solutions for web and mobile applications.",
        '• Deliver aesthetically pleasing and sustainable designs that meet client expectation, on time.',
      ],
    },
  ];

  return (
    <div className='space-y-6'>
      <div className={cn('border-b pb-2', colorClasses?.border)}>
        <h2 className={cn('text-3xl font-medium', colorClasses?.text)}>
          Work Experience
        </h2>
      </div>

      <div className='space-y-8 pl-40'>
        {workExperience.map((job, index) => (
          <WorkExperienceItem
            key={index}
            period={job.period}
            title={job.title}
            company={job.company}
            responsibilities={job.responsibilities}
            colorClasses={colorClasses}
          />
        ))}
      </div>
    </div>
  );
};

// ============================================================================
// MAIN HOMEPAGE COMPONENT
// ============================================================================

export default function HomePage() {
  const activeColor = useThemeStore(state => state.activeColor);
  const colorClasses = getColorClasses(activeColor as ColorTheme);

  return (
    <div className='space-y-8 bg-red-500/0 p-8'>
      <div className='mx-auto max-w-4xl space-y-8'>
        <Header colorClasses={colorClasses} />
        <AboutMe colorClasses={colorClasses} />
        <SkillsSection colorClasses={colorClasses} />
        <WorkExperienceSection colorClasses={colorClasses} />
      </div>
    </div>
  );
}
