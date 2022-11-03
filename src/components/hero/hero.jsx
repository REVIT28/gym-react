import React from 'react';
import Header from '../header/header';

import './hero.scss';

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-side">
        <Header />

        <div className="the-best-ad">
          <div></div>
          <span>the best fitness club in the town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span>
            <span> your</span>
            <div>
              <span>ideal body</span>
            </div>
            <div className="span">
              in here we help you yo shape and build your ideal body <br></br>live up your life to
              fullset
            </div>
          </div>
        </div>
      </div>
      <div className="right-side"></div>
    </div>
  );
};

export default Hero;
