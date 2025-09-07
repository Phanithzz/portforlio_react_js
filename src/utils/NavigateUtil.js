export const handleNavClick = (href, e) => {
  e.preventDefault();

  const element = document.querySelector(href);
  if (!element) {
    console.warn(`Element not found: ${href}`);
    return;
  }

  const navbarHeight = 70;
  const isDesktop = window.innerWidth >= 1200; 
  const simpleBarWrapper = document.querySelector('.main-content-scroll .simplebar-content-wrapper');

  if (isDesktop && simpleBarWrapper) {
    const containerRect = simpleBarWrapper.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();
    const scrollTop = simpleBarWrapper.scrollTop;
    const relativeTop = elementRect.top - containerRect.top + scrollTop;

    simpleBarWrapper.scrollTo({
      top: relativeTop - navbarHeight,
      behavior: 'smooth',
    });
  } else {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - navbarHeight,
      behavior: 'smooth',
    });
  }
};