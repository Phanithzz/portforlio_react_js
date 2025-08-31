import './App.css';
import { NavBar } from './components/NavBar';
import OverviewPage from './pages/overview/OverviewPage';
import SimpleBar from 'simplebar-react';
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import HomeExperience from './pages/experience/Home';
import { useState, useEffect, useContext } from 'react';
import ContactHomePage from './pages/contact/Home';
import 'simplebar-react/dist/simplebar.min.css';
import { ThemeContext } from './contexts/ThemeContext';
function App() {
  const [showSections, setShowSections] = useState(false);
  const {isDark, setIsDark} = useContext(ThemeContext);

  // Delay shwoing section time
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSections(true);
    }, 600); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        overflow: "hidden",
        padding: "2rem",
        background: isDark ? "linear-gradient(120deg, #3452ff 0% 33%, #151515 33% 66%, #000000 66% 100%)" : "linear-gradient(120deg, #3452ff 0% 33%, #eeeeee 33% 66%, #ffffff 66% 100%)",
        backgroundSize: "100% 150%",
        animation: "gradientIntro 1s ease-out forwards",
      }}
    >
             <NavBar/>
      {showSections && (        
        <div>  
   
          <div 
          style={{ 
            display: "flex", 
            flexDirection: "row", 
            marginTop: "0.5rem",
            height: "calc(100vh - 60px)",
            gap: "10px" 
          }} 
        >
          {/* Left Section */}
          <div style={{
             width: "35%", 
             height: "100%", 
             borderTopLeftRadius: '1rem',
             borderBottomLeftRadius: "1rem",
             overflow: "hidden",    
            }}>
            <SimpleBar style={{ height: "90%" }}>
              <OverviewPage />
            </SimpleBar>
          </div>

          {/* Right Section */}
          <div style={{ flex: 1, height: "100%" }}>
            <SimpleBar style={{ height: "90%"}}>
              <section id="home"><HomePage /></section>
              <section id="about"><AboutPage /></section>
              <section id="projects"><HomeExperience /></section>
              <section id="contact"><ContactHomePage /></section>
            </SimpleBar>
          </div>
        </div>
        </div>
      )}
    </div>
  );
}

export default App;
