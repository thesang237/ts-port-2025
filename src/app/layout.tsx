import type { Metadata } from 'next';
import './globals.css';
import { ViewTransitions } from 'next-view-transitions';
import MainLayout from '@/components/ui/MainLayout';

export const metadata: Metadata = {
  title: 'The Sang - Product Designer',
  description:
    'Creative UX/UI Designer specializing in digital experiences that blend creativity with functionality. View my portfolio of innovative design solutions.',
  authors: [{ name: 'The Sang' }],
  keywords: [
    'UX Designer',
    'UI Designer',
    'Portfolio',
    'Web Design',
    'Mobile Design',
    'User Experience',
    'User Interface',
  ],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'The Sang - Product Designer',
    description:
      'Creative UX/UI Designer specializing in digital experiences that blend creativity with functionality.',
    url: 'https://thesang.xyz',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Sang - Product Designer',
    description: 'Creative UX/UI Designer specializing in digital experiences.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang='en'>
        <head>
          {/* Adobe Fonts */}
          <link rel='stylesheet' href='https://use.typekit.net/xxe4rcd.css' />
        </head>
        <body className='overflow-x-hidden bg-white font-sans text-gray-900 antialiased'>
          <MainLayout>{children}</MainLayout>
        </body>
      </html>
    </ViewTransitions>
  );
}
