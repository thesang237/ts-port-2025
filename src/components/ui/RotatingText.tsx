import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
  useRef,
} from 'react';
import {
  motion,
  AnimatePresence,
  Transition,
  type VariantLabels,
  type TargetAndTransition,
} from 'framer-motion';

function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(' ');
}

export interface RotatingTextRef {
  next: () => void;
  previous: () => void;
  jumpTo: (index: number) => void;
  reset: () => void;
}

export interface RotatingTextProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof motion.span>,
    'children' | 'transition' | 'initial' | 'animate' | 'exit'
  > {
  texts: string[];
  transition?: Transition;
  initial?: TargetAndTransition | VariantLabels;
  animate?: TargetAndTransition | VariantLabels;
  exit?: TargetAndTransition | VariantLabels;
  animatePresenceMode?: 'sync' | 'wait';
  animatePresenceInitial?: boolean;
  rotationInterval?: number;
  staggerDuration?: number;
  staggerFrom?: 'first' | 'last' | 'center' | 'random' | number;
  loop?: boolean;
  auto?: boolean;
  splitBy?: 'characters' | 'words' | 'lines' | string;
  onNext?: (index: number) => void;
  mainClassName?: string;
  splitLevelClassName?: string;
  elementLevelClassName?: string;
}

interface WordElement {
  characters: string[];
  needsSpace: boolean;
  startIndex: number;
  endIndex: number;
}

const RotatingText = forwardRef<RotatingTextRef, RotatingTextProps>(
  (
    {
      texts,
      transition = { type: 'spring', damping: 25, stiffness: 300 },
      initial = { y: '100%', opacity: 0 },
      animate = { y: 0, opacity: 1 },
      exit = { y: '-120%', opacity: 0 },
      animatePresenceMode = 'wait',
      animatePresenceInitial = false,
      rotationInterval = 2000,
      staggerDuration = 0,
      staggerFrom = 'first',
      loop = true,
      auto = true,
      splitBy = 'characters',
      onNext,
      mainClassName,
      splitLevelClassName,
      elementLevelClassName,
      ...rest
    },
    ref
  ) => {
    const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Memoized character splitting function
    const splitIntoCharacters = useCallback((text: string): string[] => {
      if (typeof Intl !== 'undefined' && Intl.Segmenter) {
        try {
          const segmenter = new Intl.Segmenter('en', {
            granularity: 'grapheme',
          });
          return Array.from(
            segmenter.segment(text),
            segment => segment.segment
          );
        } catch {
          // Fallback if Intl.Segmenter fails
          return Array.from(text);
        }
      }
      return Array.from(text);
    }, []);

    // Memoized stagger delay calculation
    const getStaggerDelay = useCallback(
      (index: number, totalChars: number): number => {
        if (staggerDuration === 0) return 0;

        switch (staggerFrom) {
          case 'first':
            return index * staggerDuration;
          case 'last':
            return (totalChars - 1 - index) * staggerDuration;
          case 'center': {
            const center = Math.floor(totalChars / 2);
            return Math.abs(center - index) * staggerDuration;
          }
          case 'random': {
            const randomIndex = Math.floor(Math.random() * totalChars);
            return Math.abs(randomIndex - index) * staggerDuration;
          }
          default:
            return Math.abs((staggerFrom as number) - index) * staggerDuration;
        }
      },
      [staggerFrom, staggerDuration]
    );

    // Memoized elements calculation with pre-computed indices
    const elements = useMemo((): WordElement[] => {
      if (!texts.length || currentTextIndex >= texts.length) {
        return [];
      }

      const currentText = texts[currentTextIndex];
      if (!currentText) return [];

      let elements: WordElement[] = [];
      let currentIndex = 0;

      switch (splitBy) {
        case 'characters': {
          const words = currentText.split(' ');
          elements = words.map((word, i) => {
            const characters = splitIntoCharacters(word);
            const startIndex = currentIndex;
            currentIndex += characters.length;
            return {
              characters,
              needsSpace: i !== words.length - 1,
              startIndex,
              endIndex: currentIndex - 1,
            };
          });
          break;
        }
        case 'words': {
          const words = currentText.split(' ');
          elements = words.map((word, i) => {
            const startIndex = currentIndex;
            currentIndex += 1;
            return {
              characters: [word],
              needsSpace: i !== words.length - 1,
              startIndex,
              endIndex: currentIndex - 1,
            };
          });
          break;
        }
        case 'lines': {
          const lines = currentText.split('\n');
          elements = lines.map((line, i) => {
            const startIndex = currentIndex;
            currentIndex += 1;
            return {
              characters: [line],
              needsSpace: i !== lines.length - 1,
              startIndex,
              endIndex: currentIndex - 1,
            };
          });
          break;
        }
        default: {
          const parts = currentText.split(splitBy);
          elements = parts.map((part, i) => {
            const startIndex = currentIndex;
            currentIndex += 1;
            return {
              characters: [part],
              needsSpace: i !== parts.length - 1,
              startIndex,
              endIndex: currentIndex - 1,
            };
          });
        }
      }

      return elements;
    }, [texts, currentTextIndex, splitBy, splitIntoCharacters]);

    // Memoized total character count
    const totalCharCount = useMemo(() => {
      return elements.reduce(
        (sum, element) => sum + element.characters.length,
        0
      );
    }, [elements]);

    const handleIndexChange = useCallback(
      (newIndex: number) => {
        if (newIndex >= 0 && newIndex < texts.length) {
          setCurrentTextIndex(newIndex);
          onNext?.(newIndex);
        }
      },
      [texts.length, onNext]
    );

    const next = useCallback(() => {
      if (texts.length === 0) return;

      const nextIndex =
        currentTextIndex === texts.length - 1
          ? loop
            ? 0
            : currentTextIndex
          : currentTextIndex + 1;

      if (nextIndex !== currentTextIndex) {
        handleIndexChange(nextIndex);
      }
    }, [currentTextIndex, texts.length, loop, handleIndexChange]);

    const previous = useCallback(() => {
      if (texts.length === 0) return;

      const prevIndex =
        currentTextIndex === 0
          ? loop
            ? texts.length - 1
            : currentTextIndex
          : currentTextIndex - 1;

      if (prevIndex !== currentTextIndex) {
        handleIndexChange(prevIndex);
      }
    }, [currentTextIndex, texts.length, loop, handleIndexChange]);

    const jumpTo = useCallback(
      (index: number) => {
        const validIndex = Math.max(0, Math.min(index, texts.length - 1));
        if (validIndex !== currentTextIndex) {
          handleIndexChange(validIndex);
        }
      },
      [texts.length, currentTextIndex, handleIndexChange]
    );

    const reset = useCallback(() => {
      if (currentTextIndex !== 0) {
        handleIndexChange(0);
      }
    }, [currentTextIndex, handleIndexChange]);

    useImperativeHandle(
      ref,
      () => ({
        next,
        previous,
        jumpTo,
        reset,
      }),
      [next, previous, jumpTo, reset]
    );

    // Auto-rotation effect
    useEffect(() => {
      if (!auto || texts.length <= 1) return;

      intervalRef.current = setInterval(next, rotationInterval);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      };
    }, [next, rotationInterval, auto, texts.length]);

    // Cleanup on unmount
    useEffect(() => {
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }, []);

    // Early return for empty texts
    if (!texts.length) {
      return null;
    }

    return (
      <motion.span
        className={cn(
          'relative flex flex-wrap whitespace-pre-wrap',
          mainClassName
        )}
        {...rest}
        layout
        transition={transition}
      >
        <span className='sr-only'>{texts[currentTextIndex]}</span>
        <AnimatePresence
          mode={animatePresenceMode}
          initial={animatePresenceInitial}
        >
          <motion.div
            key={currentTextIndex}
            className={cn(
              splitBy === 'lines'
                ? 'flex w-full flex-col'
                : 'relative flex flex-wrap whitespace-pre-wrap'
            )}
            layout
            aria-hidden='true'
          >
            {elements.map((wordObj, wordIndex) => (
              <span
                key={wordIndex}
                className={cn('inline-flex', splitLevelClassName)}
              >
                {wordObj.characters.map((char, charIndex) => {
                  const globalCharIndex = wordObj.startIndex + charIndex;
                  return (
                    <motion.span
                      key={`${wordIndex}-${charIndex}`}
                      initial={initial}
                      animate={animate}
                      exit={exit}
                      transition={{
                        ...transition,
                        delay: getStaggerDelay(globalCharIndex, totalCharCount),
                      }}
                      className={cn('inline-block', elementLevelClassName)}
                    >
                      {char}
                    </motion.span>
                  );
                })}
                {wordObj.needsSpace && (
                  <span className='whitespace-pre'> </span>
                )}
              </span>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.span>
    );
  }
);

RotatingText.displayName = 'RotatingText';
export default RotatingText;
