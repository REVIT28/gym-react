import React from 'react';
import Hero from './components/hero/hero';
import Programs from './components/programs/programs';
import Reasons from './components/reasons/reasons';
import Plans from './components/plans/plans';
import Testimonials from './components/testimonials/testimonials';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
    </div>
  );
}

export default App;
