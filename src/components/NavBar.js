import './styles/NavBarStyle.scss';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Button, AppBar, Toolbar, Typography, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useState, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { handleNavClick } from '../utils/NavigateUtil';

export const NavBar = ({ borderRadius }) => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  const toggleDrawer = (open) => () => {
    setMobileOpen(open);
  };

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
        {/* Logo / Title */}
        <Typography
          sx={{
            display: { xs: 'block', md: 'block' },
            fontWeight: 'bold'
          }} 
          variant="h6"
        >
          Portfolio 2025
        </Typography>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
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
          <Button onClick={() => setIsDark(!isDark)} aria-label="Toggle dark mode">
            {isDark ? <LightModeIcon sx={{color: 'white'}} /> : <DarkModeIcon sx={{color: 'black'}} />}
          </Button>
        </Box>

        {/* Mobile Menu Toggle */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
          <IconButton onClick={toggleDrawer(true)} sx={{ color: isDark ? 'white' : 'black' }}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, p: 2, backgroundColor: isDark ? '#191919' : 'white', height: '100%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="h6">Menu</Typography>
            <IconButton onClick={toggleDrawer(false)} sx={{ color: isDark ? 'white' : 'black' }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.label}>
              <Button
                fullWidth
                onClick={(e) => {
                  e.preventDefault();
                  setMobileOpen(false);
                  setTimeout(() => handleNavClick(item.href, e), 150);
                }}
                sx={{ justifyContent: "flex-start", color: isDark ? "#eee" : "#191919" }}
              >
                {item.label}
              </Button>
            </ListItem>
            
            ))}
          </List>
          <Button fullWidth onClick={() => setIsDark(!isDark)} sx={{ mt: 2 }} aria-label="Toggle dark mode">
            {isDark ? <LightModeIcon sx={{color: 'white'}} /> : <DarkModeIcon sx={{color: 'black'}} />}
          </Button>
        </Box>
      </Drawer>
    </AppBar>
  );
};
