'use client';
import Link from 'next/link';
import Image from 'next/image';
import { unstable_ViewTransition as ViewTransition } from 'react';
import { ArrowLeftIcon } from 'lucide-react';
export default function EternalWalletPage() {
  return (
    <main className='mx-auto max-w-2xl px-4 py-16' id='project-eternal-wallet'>
      {/* <TransitionLink href='/projects/application'>Back</TransitionLink> */}
      <Link href='/projects/application' className='p-4 text-stone-300'>
        <ArrowLeftIcon className='h-4 w-4' />
      </Link>
      <ViewTransition name='eternal-wallet-banner'>
        <Image
          src='/images/projects/eternal-wallet/main-banner.png'
          alt='Eternal Wallet'
          width={800}
          height={400}
          className=' h-auto w-full rounded-4xl object-cover'
        />
      </ViewTransition>

      <h1 className='mb-4 text-4xl font-bold text-white'>Eternal Wallet</h1>
      <p className='mb-8 text-stone-300'>
        Eternal Wallet is a secure and user-friendly digital wallet application
        designed to help you manage your assets with ease. Enjoy seamless
        transactions, real-time balance updates, and robust security features.
      </p>
      <section className='mb-8'>
        <h2 className='mb-2 text-2xl font-semibold text-white'>Key Features</h2>
        <ul className='list-inside list-disc space-y-1 text-stone-300'>
          <li>Secure asset storage</li>
          <li>Real-time transaction tracking</li>
          <li>Multi-platform support</li>
          <li>Intuitive user interface</li>
        </ul>
      </section>
      <section>
        <h2 className='mb-2 text-2xl font-semibold text-white'>
          Technologies Used
        </h2>
        <div className='flex flex-wrap gap-2'>
          <span className='rounded-full border border-stone-700 px-3 py-1 text-xs text-stone-300'>
            React
          </span>
          <span className='rounded-full border border-stone-700 px-3 py-1 text-xs text-stone-300'>
            TypeScript
          </span>
          <span className='rounded-full border border-stone-700 px-3 py-1 text-xs text-stone-300'>
            Node.js
          </span>
          <span className='rounded-full border border-stone-700 px-3 py-1 text-xs text-stone-300'>
            MongoDB
          </span>
        </div>
      </section>
    </main>
  );
}
