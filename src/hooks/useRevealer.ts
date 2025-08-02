'use client';

import {
  REVEALER_ENTER_DURATION,
  CLOSER_DURATION,
  REVEALER_OUT_DURATION,
} from '@/constants/motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import CustomEase from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);
CustomEase.create('hop', '0.9, 0, 0.1, 1');

export function useRevealer() {
  useGSAP(() => {
    const projectsLayout = document.querySelector(
      '#projects-layout'
    ) as HTMLElement | null;

    gsap.to('.revealer', {
      scaleY: 0,
      ease: 'hop',
      duration: REVEALER_OUT_DURATION,
      delay: CLOSER_DURATION + REVEALER_ENTER_DURATION,
      onComplete: () => {
        projectsLayout && (projectsLayout.style.overflowY = 'auto');
      },
    });
  }, {});
}
