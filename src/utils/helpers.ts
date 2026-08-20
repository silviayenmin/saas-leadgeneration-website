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
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
