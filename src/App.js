import React from 'react';
import Hero from './components/hero/hero';
import Programs from './components/programs/programs';
import Reasons from './components/reasons/reasons';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
    </div>
  );
}

export default App;
