'use client';

import { CLOSER_DURATION } from '@/constants/motion';
import gsap from 'gsap';
import CustomEase from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);
CustomEase.create('hop', '0.9, 0, 0.1, 1');

export function useCloser() {
  const triggerCloser = () => {
    gsap.to('.closer', {
      scaleY: 1,
      ease: 'hop',
      duration: CLOSER_DURATION,
      delay: 0,
    });
  };

  return triggerCloser;
}
