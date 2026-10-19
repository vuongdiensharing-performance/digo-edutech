import { useEffect, useRef } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  staggerDelayMs?: number;
}

/**
 * Enhanced Hook implementing Coca-Cola inspired fluid/spring scroll physics
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const ref = useRef<T | null>(null);
  const { threshold = 0.12, rootMargin = '0px 0px -40px 0px', triggerOnce = true } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      element.classList.add('is-revealed');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            entry.target.classList.remove('is-revealed');
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return ref;
}

/**
 * Group hook for coordinating multi-element effervescent spring reveals
 */
export function useScrollRevealGroup<T extends HTMLElement = HTMLDivElement>(
  selector: string = '.reveal-on-scroll',
  options: ScrollRevealOptions = {}
) {
  const containerRef = useRef<T | null>(null);
  const { threshold = 0.08, rootMargin = '0px 0px -40px 0px', triggerOnce = true, staggerDelayMs = 70 } = options;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const targets = Array.from(container.querySelectorAll<HTMLElement>(selector));

    if (mediaQuery.matches) {
      targets.forEach((target) => target.classList.add('is-revealed'));
      return;
    }

    // Set dynamic fluid stagger indexes for sibling grids
    targets.forEach((target, index) => {
      if (!target.style.getPropertyValue('--spring-delay')) {
        target.style.setProperty('--spring-delay', `${(index % 4) * staggerDelayMs}ms`);
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            entry.target.classList.remove('is-revealed');
          }
        });
      },
      { threshold, rootMargin }
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
    };
  }, [selector, threshold, rootMargin, triggerOnce, staggerDelayMs]);

  return containerRef;
}
