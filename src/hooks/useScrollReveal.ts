import { useEffect, useRef } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Custom hook applying IntersectionObserver to fade in elements on scroll
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const ref = useRef<T | null>(null);
  const { threshold = 0.12, rootMargin = '0px 0px -40px 0px', triggerOnce = true } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check prefers-reduced-motion
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
 * Helper hook to observe all child elements matching a selector inside a container
 */
export function useScrollRevealGroup<T extends HTMLElement = HTMLDivElement>(
  selector: string = '.reveal-on-scroll',
  options: ScrollRevealOptions = {}
) {
  const containerRef = useRef<T | null>(null);
  const { threshold = 0.1, rootMargin = '0px 0px -30px 0px', triggerOnce = true } = options;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const targets = container.querySelectorAll(selector);

    if (mediaQuery.matches) {
      targets.forEach((target) => target.classList.add('is-revealed'));
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

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
    };
  }, [selector, threshold, rootMargin, triggerOnce]);

  return containerRef;
}
