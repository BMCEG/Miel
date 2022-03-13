import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Homepage from './pages/homepage.js';
import { useMediaQuery } from 'react-responsive';
import HomepageMob from './pages/homepage-mob.js';

function App() {
  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' });

  return <Router>{isLandscape ? <Homepage /> : <HomepageMob />}</Router>;
}

export default App;
