/**
 * Global smooth scroll utility. Use with onClick on motion.button — no href.
 * @param id - The element ID to scroll to (e.g. 'contact').
 */
export const smoothScrollTo = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 100; // Deep offset so the form is centered in view
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
