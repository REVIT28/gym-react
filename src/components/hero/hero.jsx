import React from 'react';
import Header from '../header/header';
import hero from '../../assets/hero_image.png';
import hero_back from '../../assets/hero_image_back.png';
import heart from '../../assets/heart.png';
import calories from '../../assets/calories.png';

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
              In here we help you yo shape and build your ideal body live up your life to fullset
            </div>
          </div>
          <div className="figures">
            <div className="">
              <span>+140</span>
              <span>expert coach</span>
            </div>
            <div className="">
              <span>+978</span>
              <span>members joined</span>
            </div>
            <div className="">
              <span>+50</span>
              <span>fitness programs</span>
            </div>
          </div>

          <div className="hero-buttons">
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>
          </div>
        </div>
      </div>
      <div className="right-side">
        <button className="btn">Join Now</button>

        <div className="heart-rate">
          <img src={heart} alt="heart" />
          <span>Heart Rate</span> <span>116 bpm</span>
        </div>

        <img className="hero" src={hero} alt="hero" />
        <img className="hero_back" src={hero_back} alt="hero_back" />

        <div className="calories">
          <img src={calories} alt="" />
          <div className="">
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
