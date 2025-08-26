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

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        borderRadius: borderRadius || '1rem',
        backgroundColor: 'background.paper'
      }}
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