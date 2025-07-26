'use client';

import SplitText from '@/components/ui/SplitText';
import { PAGE_LOADER_DURATION } from '@/constants/motion';
import AnimatedContent from '@/components/ui/AnimatedContent';
import { useThemeStore } from '@/store/useThemeStore';
import { cn } from '@/lib/utils';

export default function HomePage() {
  const activeColor = useThemeStore(state => state.activeColor);

  // Map color themes to their actual hex colors for consistent styling
  const getThemeColors = (theme: string) => {
    const colorMap = {
      orange: {
        primary: 'text-orange-500',
        primaryBg: 'bg-orange-600',
        secondary: 'bg-orange-500',
        tertiary: 'bg-orange-700',
        border: 'border-orange-600',
      },
      violet: {
        primary: 'text-violet-500',
        primaryBg: 'bg-violet-600',
        secondary: 'bg-violet-500',
        tertiary: 'bg-violet-700',
        border: 'border-violet-600',
      },
      pink: {
        primary: 'text-pink-500',
        primaryBg: 'bg-pink-600',
        secondary: 'bg-pink-500',
        tertiary: 'bg-pink-700',
        border: 'border-pink-600',
      },
      green: {
        primary: 'text-green-500',
        primaryBg: 'bg-green-600',
        secondary: 'bg-green-500',
        tertiary: 'bg-green-700',
        border: 'border-green-600',
      },
    };
    return colorMap[theme as keyof typeof colorMap] || colorMap.orange;
  };

  const themeColors = getThemeColors(activeColor);

  return (
    <div className='space-y-8 bg-red-500/0 p-8'>
      <div className='mx-auto max-w-4xl space-y-8'>
        {/* Header Section */}
        <div className='space-y-8'>
          {/* Title and decorative line */}
          <div className='relative'>
            <SplitText
              as='h1'
              className={cn(
                'text-5xl leading-[1.2] font-bold tracking-wide uppercase',
                themeColors.primary
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
                themeColors.primaryBg
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
                  themeColors.tertiary
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
                I design user-centric, visually stunning, and interactive
                interfaces that bring value to both businesses and users.
              </p>
            </div>
          </AnimatedContent>
        </div>

        {/* About Me Section */}
        <AnimatedContent
          distance={50}
          direction='up'
          duration={0.8}
          delay={PAGE_LOADER_DURATION + 0.5}
        >
          <div className='space-y-4'>
            <div className={cn('border-b pb-2', themeColors.border)}>
              <h2 className={cn('text-3xl font-medium', themeColors.primary)}>
                About Me
              </h2>
            </div>
            <div className='pl-40'>
              <p className='leading-relaxed'>
                With over 5 years of experience as a full-time designer and
                freelancer, I specialize in creating intuitive and engaging user
                interfaces that not only look great but also deliver real value
                to businesses and users. My expertise lies in UI, visual, and
                interaction design, with a passion for crafting seamless digital
                experiences. I&apos;m always eager to expand my knowledge in UX
                and user-centric applications to ensure my designs solve real
                problems.
              </p>
            </div>
          </div>
        </AnimatedContent>

        {/* Skills Section */}
        <AnimatedContent
          distance={50}
          direction='up'
          duration={0.8}
          delay={PAGE_LOADER_DURATION + 0.6}
        >
          <div className='space-y-6'>
            <div className={cn('border-b pb-2', themeColors.border)}>
              <h2 className={cn('text-3xl font-medium', themeColors.primary)}>
                Skills
              </h2>
            </div>

            <div className='space-y-8 pl-40'>
              {/* Design Skills */}
              <div className='space-y-2'>
                <h3 className='text-sm font-bold tracking-wider uppercase'>
                  Design
                </h3>
                <div className='space-y-2'>
                  <div className='flex flex-wrap gap-2'>
                    {['UX / UI', '2D Motion', 'Branding'].map(skill => (
                      <span
                        key={skill}
                        className={cn(
                          'rounded-full border px-10 py-2 font-semibold',
                          themeColors.border,
                          themeColors.primary
                        )}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className='flex flex-wrap gap-2'>
                    {['Lottie Animation', 'UI Interaction'].map(skill => (
                      <span
                        key={skill}
                        className={cn(
                          'rounded-full border px-10 py-2 font-semibold',
                          themeColors.border,
                          themeColors.primary
                        )}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Development Skills */}
              <div className='space-y-2'>
                <h3 className='text-sm font-bold tracking-wider uppercase'>
                  Development
                </h3>
                <div className='space-y-2'>
                  <div className='flex flex-wrap gap-2'>
                    {['HTML', 'CSS', 'Javascript'].map(skill => (
                      <span
                        key={skill}
                        className={cn(
                          'rounded-full border px-10 py-2 font-semibold',
                          themeColors.border,
                          themeColors.primary
                        )}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className='flex flex-wrap gap-2'>
                    {['ReactJS', 'NextJS'].map(skill => (
                      <span
                        key={skill}
                        className={cn(
                          'rounded-full border px-10 py-2 font-semibold',
                          themeColors.border,
                          themeColors.primary
                        )}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Creative Coding Skills */}
              <div className='space-y-2'>
                <h3 className='text-sm font-bold tracking-wider uppercase'>
                  Creative Coding
                </h3>
                <div className='space-y-2'>
                  <div className='flex flex-wrap gap-2'>
                    {['P5JS', 'ThreeJS'].map(skill => (
                      <span
                        key={skill}
                        className={cn(
                          'rounded-full border px-10 py-2 font-semibold',
                          themeColors.border,
                          themeColors.primary
                        )}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className='flex flex-wrap gap-2'>
                    {['Framer Motion', 'GSAP'].map(skill => (
                      <span
                        key={skill}
                        className={cn(
                          'rounded-full border px-10 py-2 font-semibold',
                          themeColors.border,
                          themeColors.primary
                        )}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedContent>

        {/* Work Experience Section */}
        <div className='space-y-6'>
          <div className={cn('border-b pb-2', themeColors.border)}>
            <h2 className={cn('text-3xl font-medium', themeColors.primary)}>
              Work Experience
            </h2>
          </div>

          <div className='space-y-8 pl-40'>
            {/* Autonomous Inc. */}
            <div className='space-y-4'>
              <div className='flex flex-col items-start gap-2'>
                <div className='space-y-2'>
                  <p className='text-sm font-bold tracking-wider uppercase'>
                    2023 → Present
                  </p>
                  <h3
                    className={cn('text-xl font-medium', themeColors.primary)}
                  >
                    Creative Designer & Developer
                  </h3>
                </div>
                <span
                  className={cn(
                    'mt-1 rounded-full px-3 py-1 text-sm font-bold',
                    themeColors.secondary
                  )}
                >
                  Autonomous Inc.
                </span>
              </div>
              <div className='space-y-1'>
                <p>
                  • Brainstorm and develop generative art collection on
                  blockchain using creative coding tools and languages like
                  Canvas, P5JS, ThreeJS.
                </p>
                <p>
                  • Design creative and interactive landing pages and web
                  experience.
                </p>
                <p>
                  • Design UI for AI agent web application and Web3 projects.
                </p>
                <p>
                  • Draw and animate icons, visual elements to enhance user
                  experience.
                </p>
              </div>
            </div>

            {/* Extracy Inc. */}
            <div className='space-y-4'>
              <div className='flex flex-col items-start gap-2'>
                <div className='space-y-2'>
                  <p className='text-sm font-bold tracking-wider uppercase'>
                    2022 → 2023
                  </p>
                  <h3
                    className={cn('text-xl font-medium', themeColors.primary)}
                  >
                    Middle UX/UI Designer
                  </h3>
                </div>
                <span
                  className={cn(
                    'mt-1 rounded-full px-3 py-1 text-sm font-bold',
                    themeColors.secondary
                  )}
                >
                  Extracy Inc.
                </span>
              </div>
              <div className='space-y-1'>
                <p>
                  • Analyze PO&apos;s requirements of blockchain app features
                </p>
                <p>
                  • Conduct market research, create user flows, wireframes, and
                  mockups.
                </p>
                <p>
                  • Provide essential visual assets, from graphic design to
                  creative coding.
                </p>
                <p>
                  • Collaborate with designers & developers to ensure a
                  successful product build.
                </p>
              </div>
            </div>

            {/* Solazu Technology */}
            <div className='space-y-4'>
              <div className='flex flex-col items-start gap-2'>
                <div className='space-y-2'>
                  <p className='text-sm font-bold tracking-wider uppercase'>
                    2020 → 2022
                  </p>
                  <h3
                    className={cn('text-xl font-medium', themeColors.primary)}
                  >
                    UX/UI Designer
                  </h3>
                </div>
                <span
                  className={cn(
                    'mt-1 rounded-full px-3 py-1 text-sm font-bold',
                    themeColors.secondary
                  )}
                >
                  Solazu Technology
                </span>
              </div>
              <div className='space-y-1'>
                <p>• Support senior in applying design language & system</p>
                <p>• Draft wireframes & final mockups for new features</p>
                <p>• Support developers in UI building & testing</p>
                <p>• Design UI assets (icon & illustration) from 2D to 3D</p>
              </div>
            </div>

            {/* Freelance */}
            <div className='space-y-4'>
              <div className='flex flex-col items-start gap-2'>
                <div className='space-y-2'>
                  <p className='text-sm font-bold tracking-wider uppercase'>
                    2020 → Present
                  </p>
                  <h3
                    className={cn('text-xl font-medium', themeColors.primary)}
                  >
                    Visual Designer
                  </h3>
                </div>
                <span
                  className={cn(
                    'mt-1 rounded-full px-3 py-1 text-sm font-bold',
                    themeColors.secondary
                  )}
                >
                  Freelance
                </span>
              </div>
              <div className='space-y-1'>
                <p>
                  • Conduct extensive research on client&apos;s problems & needs
                  in order to provide tailored visual solutions for web and
                  mobile applications.
                </p>
                <p>
                  • Deliver aesthetically pleasing and sustainable designs that
                  meet client expectation, on time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
