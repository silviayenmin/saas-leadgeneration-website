/**
 * Utility function to combine class names cleanly
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Utility to perform smooth scrolling to an anchor element by ID
 */
export function scrollToSection(elementId: string): void {
  const cleanId = elementId.replace('#', '');
  const element = document.getElementById(cleanId);
  if (element) {
    const headerOffset = 80; // Height of sticky navbar + spacing buffer
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;
    
    // Temporarily disable sticky pinning to scroll smoothly past storytelling section
    document.body.classList.add('is-nav-scrolling');

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });

    let scrollTimeout: any;
    const handleScrollEnd = () => {
      document.body.classList.remove('is-nav-scrolling');
      window.removeEventListener('scrollend', handleScrollEnd);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };

    window.addEventListener('scrollend', handleScrollEnd);
    scrollTimeout = setTimeout(handleScrollEnd, 1000);
  }
}
