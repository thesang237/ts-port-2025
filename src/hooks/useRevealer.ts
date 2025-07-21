'use client';

import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
import CustomEase from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);
CustomEase.create('hop', '0.9, 0, 0.1, 1');

export function useRevealer() {
  useGSAP(() => {
    gsap.to('.revealer', {
      scaleY: 0,
      ease: 'hop',
      duration: 0.7,
      delay: 0.7,
    });
  });
}
