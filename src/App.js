import './App.css';
import { NavBar } from './components/NavBar';
import OverviewPage from './pages/overview/OverviewPage';
import SimpleBar from 'simplebar-react';
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import HomeExperience from './pages/experience/Home';
import { useState, useEffect } from 'react';
import ContactHomePage from './pages/contact/Home';
import 'simplebar-react/dist/simplebar.min.css';
function App() {
  const [showSections, setShowSections] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSections(true);
    }, 1020); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App" style={{ height: "100vh", overflow: "hidden" }}>
      {showSections && (        
        <>  
          <NavBar />
          <div 
  style={{ 
    display: "flex", 
    flexDirection: "row", 
    marginTop: "0.5rem",
    height: "calc(100vh - 60px)",
    gap: "10px" // Small gap between sections
  }} 
>
  {/* Left Section */}
  <div style={{ width: "35%", height: "100%" }}> {/* Fixed width instead of percentage */}
    <SimpleBar style={{ height: "100%" }}>
      <OverviewPage />
    </SimpleBar>
  </div>

  {/* Right Section */}
  <div style={{ flex: 1, height: "100%" }}> {/* Takes all remaining space */}
    <SimpleBar style={{ height: "100%", paddingBottom: "2rem" }}>
      <section id="home"><HomePage /></section>
      <section id="about"><AboutPage /></section>
      <section id="projects"><HomeExperience /></section>
      <section id="contact"><ContactHomePage /></section>
    </SimpleBar>
  </div>
</div>
        </>
      )}
    </div>
  );
}

export default App;
