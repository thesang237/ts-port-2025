import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, GSAPSplitText);

export interface SplitTextProps {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  ease?: string | ((t: number) => number);
  splitType?: 'chars' | 'words' | 'lines' | 'words, chars';
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  textAlign?: React.CSSProperties['textAlign'];
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  children,
  as: Component = 'p',
  className = '',
  delay = 1,
  stagger = 100,
  duration = 0.6,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  onLetterAnimationComplete,
}) => {
  const ref = useRef<HTMLElement>(null);
  const animationCompletedRef = useRef(false);

  // Extract text content from children
  const getTextContent = (node: React.ReactNode): string => {
    if (typeof node === 'string') return node;
    if (typeof node === 'number') return node.toString();
    if (Array.isArray(node)) return node.map(getTextContent).join(' ');
    if (
      React.isValidElement(node) &&
      node.props &&
      typeof node.props === 'object' &&
      'children' in node.props
    ) {
      return getTextContent(node.props.children as React.ReactNode);
    }
    return '';
  };

  const text = getTextContent(children);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let splitter: GSAPSplitText;
    let tl: gsap.core.Timeline;
    let targets: Element[];

    const createAnimation = () => {
      if (animationCompletedRef.current) return;

      const absoluteLines = splitType === 'lines';
      if (absoluteLines) el.style.position = 'relative';

      splitter = new GSAPSplitText(el, {
        type: splitType,
        absolute: absoluteLines,
        linesClass: 'split-line',
      });

      switch (splitType) {
        case 'lines':
          targets = splitter.lines;
          break;
        case 'words':
          targets = splitter.words;
          break;
        case 'words, chars':
          targets = [...splitter.words, ...splitter.chars];
          break;
        default:
          targets = splitter.chars;
      }

      targets.forEach(t => {
        (t as HTMLElement).style.willChange = 'transform, opacity';
      });

      const startPct = (1 - threshold) * 100;
      const m = /^(-?\d+)px$/.exec(rootMargin);
      const raw = m ? parseInt(m[1], 10) : 0;
      const sign = raw < 0 ? `-=${Math.abs(raw)}px` : `+=${raw}px`;
      const start = `top ${startPct}%${sign}`;

      tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: 'play none none none',
          once: true,
        },
        delay: delay,
        smoothChildTiming: true,
        onComplete: () => {
          animationCompletedRef.current = true;
          gsap.set(targets, {
            ...to,
            clearProps: 'willChange',
            immediateRender: true,
          });
          onLetterAnimationComplete?.();
        },
      });

      tl.set(targets, { ...from, immediateRender: true, force3D: true });
      tl.to(targets, {
        ...to,
        duration,
        ease,
        stagger: stagger / 1000,
        force3D: true,
      });
    };

    const handleVisibilityChange = () => {
      if (!document.hidden && animationCompletedRef.current) {
        // Reset animation state when tab becomes visible again
        animationCompletedRef.current = false;

        // Clean up existing animation
        if (tl) {
          tl.kill();
          ScrollTrigger.getAll().forEach(t => {
            if (t.trigger === el) t.kill();
          });
        }
        if (targets) {
          gsap.killTweensOf(targets);
        }
        if (splitter) {
          splitter.revert();
        }

        // Recreate animation
        setTimeout(createAnimation, 50); // Small delay to ensure cleanup is complete
      }
    };

    // Add visibility change listener
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Initial animation creation
    createAnimation();

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (tl) tl.kill();
      ScrollTrigger.getAll().forEach(t => {
        if (t.trigger === el) t.kill();
      });
      if (targets) gsap.killTweensOf(targets);
      if (splitter) splitter.revert();
    };
  }, [
    text,
    delay,
    stagger,
    duration,
    ease,
    splitType,
    from,
    to,
    threshold,
    rootMargin,
    onLetterAnimationComplete,
  ]);

  return React.createElement(
    Component,
    {
      ref,
      className: `split-parent inline-block overflow-hidden whitespace-normal ${className}`,
      style: {
        textAlign,
        wordWrap: 'break-word',
      },
    },
    children
  );
};

export default SplitText;
