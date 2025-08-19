'use client';

import { Mail, Instagram, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/ToastProvider';

// Behance SVG Icon Component
const BehanceIcon = ({ className }: { className?: string }) => (
  <svg
    width='25'
    height='25'
    viewBox='0 0 25 25'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
  >
    <g clipPath='url(#clip0_70_263)'>
      <path
        d='M7.86673 4.84063C8.46105 4.82959 9.05452 4.89052 9.6342 5.02209C10.1223 5.12865 10.5857 5.32694 10.9997 5.60641C11.3822 5.88432 11.6847 6.25794 11.8771 6.68976C12.0982 7.22076 12.2049 7.79241 12.1901 8.36741C12.2153 8.99877 12.054 9.62356 11.7265 10.1639C11.382 10.6743 10.9057 11.0819 10.3483 11.3434C11.1048 11.5474 11.7637 12.0145 12.2065 12.6609C12.6316 13.3457 12.8453 14.1408 12.8207 14.9465C12.8348 15.5888 12.7019 16.2259 12.4324 16.8092C12.1833 17.318 11.8185 17.7614 11.3672 18.104C10.9026 18.4427 10.3798 18.6934 9.82474 18.8434C9.24913 19.0027 8.65449 19.0826 8.05726 19.0811H1.5V4.84063H7.86673ZM7.48837 10.6003C7.95533 10.6196 8.41501 10.4798 8.7922 10.2038C8.97284 10.043 9.11337 9.84219 9.20254 9.61737C9.29171 9.39256 9.32705 9.15 9.30575 8.90909C9.31784 8.62771 9.26181 8.34757 9.14243 8.09249C9.04116 7.8894 8.8837 7.71965 8.68877 7.60344C8.49132 7.47552 8.2695 7.38994 8.0373 7.35211C7.78537 7.30331 7.529 7.28111 7.27243 7.28588H4.47059V10.613H7.48837V10.6003ZM7.65169 16.6631C7.93409 16.6669 8.21591 16.6365 8.49097 16.5724C8.74233 16.5169 8.98072 16.4137 9.19324 16.2684C9.40143 16.1232 9.56964 15.9279 9.68229 15.7004C9.81291 15.4104 9.87292 15.0936 9.85741 14.7759C9.88572 14.4864 9.84738 14.1942 9.74531 13.9218C9.64324 13.6494 9.48015 13.404 9.26855 13.2044C8.82006 12.874 8.27043 12.7104 7.71429 12.7416H4.47059V16.6631H7.65169Z'
        fill='currentColor'
      />
      <path
        d='M17.0515 16.6105C17.2846 16.8266 17.5593 16.9931 17.8587 17.0998C18.1582 17.2065 18.4762 17.2511 18.7935 17.2311C19.2965 17.2438 19.7897 17.0908 20.1972 16.7956C20.5286 16.5801 20.7796 16.2611 20.9112 15.8883H23.2803C23.0279 16.9497 22.4114 17.8891 21.5382 18.5431C20.7005 19.0992 19.7105 19.3808 18.7055 19.3488C17.9883 19.3582 17.2764 19.2234 16.6123 18.9523C16.0115 18.7018 15.4727 18.3231 15.0336 17.8427C14.596 17.3393 14.2599 16.756 14.0437 16.1251C13.8009 15.4198 13.6821 14.6779 13.6925 13.9321C13.6881 13.1988 13.8109 12.4703 14.0555 11.779C14.384 10.8064 15.0122 9.96297 15.8499 9.36962C16.6876 8.77627 17.6917 8.46354 18.7182 8.47632C19.4761 8.46048 20.2255 8.63783 20.8958 8.99168C21.5017 9.32395 22.0245 9.78927 22.4247 10.3527C22.834 10.9438 23.1274 11.6074 23.2893 12.308C23.4669 13.0603 23.5302 13.8351 23.4772 14.6062H16.4209C16.3637 15.3308 16.5897 16.0492 17.0515 16.6105ZM20.1473 11.1947C19.9498 10.9972 19.7123 10.8443 19.4508 10.7463C19.1892 10.6483 18.9097 10.6075 18.6311 10.6267C18.2615 10.6126 17.8945 10.6945 17.5659 10.8644C17.3054 11.0078 17.0755 11.2008 16.889 11.4324C16.7238 11.6496 16.6007 11.8958 16.5261 12.1583C16.4589 12.3772 16.4169 12.603 16.4009 12.8315H20.7715C20.7334 12.236 20.5165 11.6658 20.1491 11.1956L20.1473 11.1947Z'
        fill='currentColor'
      />
      <path
        d='M21.3143 5.7915H15.8376V7.19151H21.3143V5.7915Z'
        fill='currentColor'
      />
    </g>
    <defs>
      <clipPath id='clip0_70_263'>
        <rect
          width='22'
          height='14.5036'
          fill='white'
          transform='translate(1.5 4.84082)'
        />
      </clipPath>
    </defs>
  </svg>
);

interface SocialButton {
  id: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  href?: string;
  tooltip: string;
}

export default function SidebarSocialButtons() {
  const { showToast } = useToast();

  const socialButtons: SocialButton[] = [
    {
      id: 'email',
      icon: Mail,
      tooltip: 'Copy email address',
    },
    {
      id: 'behance',
      icon: BehanceIcon,
      href: 'https://behance.net/thesang',
      tooltip: 'View Behance profile',
    },
    {
      id: 'linkedin',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/thesang',
      tooltip: 'View LinkedIn profile',
    },
    {
      id: 'instagram',
      icon: Instagram,
      href: 'https://instagram.com/thesang_motion',
      tooltip: 'View Instagram profile',
    },
  ];

  const handleButtonClick = (button: SocialButton) => {
    if (button.id === 'email') {
      navigator.clipboard.writeText('hello@thesang.xyz');
      showToast('Email copied to clipboard!', 'success', 2000);
    } else if (button.href) {
      window.open(button.href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      className={cn(
        'glass-sidebar grid h-auto grid-cols-2 grid-rows-2 place-items-center gap-2 p-2',
        '3xl:gap-4 3xl:p-4'
      )}
    >
      {socialButtons.map(button => {
        const IconComponent = button.icon;

        return (
          <button
            key={button.id}
            onClick={() => handleButtonClick(button)}
            className={cn(
              'flex aspect-square h-auto w-full items-center justify-center rounded-full transition-all duration-200 hover:scale-110 hover:bg-white/5',
              'text-stone-300 hover:text-stone-50'
            )}
            title={button.tooltip}
          >
            <IconComponent size={20} className='transition-colors' />
          </button>
        );
      })}
    </div>
  );
}
