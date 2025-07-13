import './App.css';
import { NavBar } from './components/NavBar';
import OverviewPage from './pages/overview/OverviewPage';
import FullviewPage from './pages/fullview/FullviewPage';

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <div className='d-flex flex-row justify-content-between mt-2'>
        <OverviewPage width= "35%" height ="100%"/>
        <div class="scrollable-container" style={{width: "63%"}} >
            <FullviewPage height="2000px" />
        </div>
      </div>
    </div>
  );
}

export default App;
