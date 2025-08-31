export const handleNavClick = (href, e) => {
    e.preventDefault();
    const targetId = href.substring(1); // Remove the '#'
    const element = document.getElementById(targetId);
    
    if (element) {
      const navbarHeight = 70; 
      const elementPosition = element.offsetTop;
      const scrollContainer = element.closest('[style*="overflow"]') || 
                            element.closest('.simplebar-content-wrapper') ||
                            window;
      
      if (scrollContainer === window) {
        window.scrollTo({
          top: elementPosition - navbarHeight,
          behavior: 'smooth'
        });
      } else {
        scrollContainer.scrollTo({
          top: elementPosition - navbarHeight,
          behavior: 'smooth'
        });
      }
    }
  };
