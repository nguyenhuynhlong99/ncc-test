import './App.css';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import { useEffect, useState } from 'react';

function App() {
  const [navMobile, setNavMobile] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    if (width <= 1024) {
      setNavMobile(false);
    }

    return () => window.removeEventListener('resize', handleWindowResize);
  }, [width]);

  return (
    <div className="App">
      <Sidebar navMobile={navMobile} />
      <Main navMobile={navMobile} setNavMobile={setNavMobile} />
    </div>
  );
}

export default App;
