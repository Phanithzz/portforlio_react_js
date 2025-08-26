import './App.css';
import { NavBar } from './components/NavBar';
import OverviewPage from './pages/overview/OverviewPage';
import SimpleBar from 'simplebar-react';
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import HomeExperience from './pages/experience/Home';
import { useState, useEffect } from 'react';
function App() {
  const [showSections, setShowSections] = useState(false);

  useEffect(() => {
    // Duration of gradient animation = 2000ms
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
        className="d-flex flex-row justify-content-between mt-2" 
        style={{ height: "calc(100vh - 60px)" }} // subtract navbar height
      >
        {/* Left Section */}
        <div style={{ width: "35%", height: "100%" }}>
          <SimpleBar style={{ height: "100%" }}>
            <OverviewPage />
          </SimpleBar>
        </div>
      
        {/* Right Section */}
        <div style={{ width: "63%", height: "100%"}}>
          <SimpleBar style={{ height: "100%", paddingBottom: "2rem" }}>
            {/* Don't lock height on children, let them stack */}
            <HomePage />
            <AboutPage />
            <HomeExperience />
          </SimpleBar>
        </div>
      </div>
</>



        )}
    </div>

  );
}

export default App;
