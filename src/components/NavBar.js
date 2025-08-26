import './styles/NavBarStyle.scss';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Button, AppBar, Toolbar, Typography, Box } from '@mui/material';

export const NavBar = ({ borderRadius, darkMode, onToggleDarkMode }) => {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href, e) => {
    e.preventDefault();
    const targetId = href.substring(1); // Remove the '#'
    const element = document.getElementById(targetId);
    
    if (element) {
      const navbarHeight = 70; // Adjust this to match your AppBar height
      const elementPosition = element.offsetTop;
      
      // Find the scrollable container (your SimpleBar/div container)
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

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        borderRadius: borderRadius || '1rem',
        backgroundColor: 'background.paper'
      }}
      className='main'
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h5" component="h1">
          Portfolio 2025
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          {navItems.map((item) => (
            <Button 
              key={item.label}
              component="a" 
              href={item.href}
              onClick={(e) => handleNavClick(item.href, e)}
              sx={{ color: 'text.primary' }}
            >
              {item.label}
            </Button>
          ))}
          
          <Button 
            onClick={onToggleDarkMode}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};