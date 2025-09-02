import './styles/NavBarStyle.scss';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Button, AppBar, Toolbar, Typography, Box } from '@mui/material';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { handleNavClick } from '../utils/NavigateUtil';

export const NavBar = ({ borderRadius }) => {
  const {isDark, setIsDark} = useContext(ThemeContext);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        backgroundColor: isDark ? '#191919' : 'white',
        color: isDark ? 'white' : '#191919',
        borderRadius: borderRadius || '1rem',
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
              sx={{ color: isDark ? '#eeeeee' : '#191919' }}

            >
              {item.label}
            </Button>
          ))}
          
          <Button 
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle dark mode"
          >
            {isDark ? <LightModeIcon sx={{color: 'white'}} /> : <DarkModeIcon sx={{color: 'black'}} />}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};