import './App.css';
import { NavBar } from './components/NavBar';
import OverviewPage from './pages/overview/OverviewPage';
import SimpleBar from 'simplebar-react';
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import HomeExperience from './pages/experience/Home';
import { useState, useEffect, useContext, useRef } from 'react';
import ContactHomePage from './pages/contact/Home';
import 'simplebar-react/dist/simplebar.min.css';
import { ThemeContext } from './contexts/ThemeContext';
import { Box, Grid2, Paper } from '@mui/material';

import { useTheme, useMediaQuery } from '@mui/material';
import ScrollUp from './components/ScrollUp';
import SkillHomePage from './pages/skill/Home';
import HomeEducation from './pages/education/Home';

function App() {
  const [showSections, setShowSections] = useState(false);
  const { isDark } = useContext(ThemeContext);
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up('lg')); // true on lg and above
  const scrollRef = useRef(null);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSections(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const backgroundStyle = {
    minHeight: "100vh",
    alignItems: "stretch" ,
    overflowX: "hidden",
    padding: "1rem",
    background: isDark
      ? "linear-gradient(120deg, #3452ff 0%, #3452ff 33%, #151515 33%, #151515 66%, #000000 66%, #000000 100%)"
      : "linear-gradient(120deg, #3452ff 0%, #3452ff 33%, #eeeeee 33%, #eeeeee 66%, #ffffff 66%, #ffffff 100%)",
    backgroundSize: "100% 100%",
    animation: "gradientIntro 1s ease-out forwards",
    transition: "background 0.3s ease",
  };

  const leftSectionStyle = {
    height: { xs: "auto", lg: "calc(100vh - 120px)" },
    borderTopLeftRadius: '1rem',
    borderBottomLeftRadius: "1rem",
    overflow: "hidden",
    backgroundColor: isDark ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)',
    backdropFilter: 'blur(10px)',
  };

  const rightSectionStyle = {
    height: { xs: "auto", lg: "calc(100vh - 120px)" },
    borderTopRightRadius: '1rem',
    borderBottomRightRadius: "1rem",
    overflow: "hidden",
    backgroundColor: isDark ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)',
    backdropFilter: 'blur(10px)',
  };

  return (
    <div className="App" style={backgroundStyle}>
      <Box sx={{ my: '0.5rem' }}>
        <NavBar />
      </Box>

      {showSections && (
        <Grid2 container spacing={2}>
          {/* Left Section - Overview */}
          <Grid2 size={{ xs: 12, lg: 4 }} sx={leftSectionStyle}>
            {isLgUp ? (
              <SimpleBar style={{ maxHeight: "100%" }}>
                <OverviewPage />
              </SimpleBar>
            ) : (
              <OverviewPage /> 
            )}
          </Grid2>

          {/* Right Section - Main Content */}
          <Grid2 size={{ xs: 12, lg: 8 }} sx={rightSectionStyle}>
            {isLgUp ? (
              <SimpleBar 
                style={{ maxHeight: "100%" }} 
                className="main-content-scroll"
                ref={scrollRef}
              >
                <Box>
                  <section id="home">
                    <HomePage />
                  </section>
                  <HomeEducation />
                  <section id="about">
                    <AboutPage />     
                  </section>
                  <section id="experience">
                    <HomeExperience />
                  </section>
                  <SkillHomePage scrollerRef={scrollRef} />
                  <section id="contact">
                    <ContactHomePage />
                  </section>
                </Box>
              </SimpleBar>
            ) : (
              // On mobile: no SimpleBar, natural document scroll
              <Box>
                <section id="home">
                  <HomePage />
                </section>
                <HomeEducation />
                <section id="about">
                  <AboutPage />
                </section>
                <section id="experience">
                  <HomeExperience />
                </section>
                <SkillHomePage />
                <section id="contact">
                  <ContactHomePage />
                </section>
              </Box>
            )}
          </Grid2>
        </Grid2>
      )}

      {/* Single ScrollUp component that handles both desktop and mobile */}
      <ScrollUp scrollContainerRef={scrollRef} isDesktop={isLgUp} />
    </div>
  );
}

export default App;