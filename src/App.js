import './App.css';
import { NavBar } from './components/NavBar';
import { Divider } from '@mui/material';
import AboutPage from './pages/about/AboutPage';
import { Fragment } from 'react';
import OverviewPage from './pages/overview/OverviewPage';

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <div
      className='d-flex flex-row justify-content-between mt-2'
      >
        <OverviewPage />

        <AboutPage />
      </div>
      
      
    </div>
  );
}

export default App;
