import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Homepage from './pages/homepage.js';
import { useMediaQuery } from 'react-responsive';
import HomepageMob from './pages/homepage-mob.js';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

function App() {
  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' });

  return (
    <Router>
      <div style={{ overflow: 'scroll !important' }}>
        <TransformWrapper
          wheel={{ disabled: true }}
          panning={{ disabled: true }}
          pinch={{ disabled: false }}
          initialScale={1}
        >
          <TransformComponent>
            {isLandscape ? <Homepage /> : <HomepageMob />}
          </TransformComponent>
        </TransformWrapper>
      </div>
    </Router>
  );
}

export default App;
