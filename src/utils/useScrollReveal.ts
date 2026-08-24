import { useEffect } from 'react';

/**
 * Custom hook to initialize IntersectionObserver for scroll-driven animations.
 * Elements with classes `reveal-fade-up`, `reveal-fade-left`, `reveal-fade-right`, or `reveal-scale`
 * will smoothly animate into view as the user scrolls.
 */
export const useScrollReveal = () => {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const elements = document.querySelectorAll(
      '.reveal-on-scroll, .reveal-fade-up, .reveal-fade-left, .reveal-fade-right, .reveal-scale'
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};
