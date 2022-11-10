import React from 'react';
import Header from '../header/header';
import hero from '../../assets/hero_image.png';
import hero_back from '../../assets/hero_image_back.png';
import heart from '../../assets/heart.png';
import calories from '../../assets/calories.png';
import NumberCounter from 'number-counter';
import './hero.scss';

import { motion } from 'framer-motion';

const Hero = () => {
  const transition = { type: 'spring', duration: 3 };

  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur blur-h"></div>
      <div className="left-side">
        <Header />

        <div className="the-best-ad" id="css">
          <motion.div
            initial={{ left: mobile ? '178px' : '238px' }}
            whileInView={{ left: '8px' }}
            transition={transition}
          />
          <span>the best fitness club in the town</span>
        </div>

        <div className="hero-text">
          <div className="">
            <div className="pidor">
              <span className="stroke-text">Shape</span>
              <span> your</span>
              <div>
                <span>ideal body</span>
              </div>
            </div>
            <div className="span">
              In here we help you yo shape and build your ideal body live up your life to fullset
            </div>
          </div>
          <div className="figures">
            <div className="">
              <span>
                <NumberCounter end={140} start={127} delay="4" preFix="+" />
              </span>
              <span>expert coach</span>
            </div>
            <div className="">
              <span>
                <NumberCounter end={978} start={960} delay="4" preFix="+" />
              </span>

              <span>members joined</span>
            </div>
            <div className="">
              <span>
                <NumberCounter end={50} start={40} delay="4" preFix="+" />
              </span>
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

        <motion.div
          className="heart-rate"
          transition={transition}
          initial={{ right: '5rem' }}
          whileInView={{ right: '3rem' }}
        >
          <img src={heart} alt="heart" />
          <span>Heart Rate</span> <span>116 bpm</span>
        </motion.div>

        <img className="hero" src={hero} alt="hero" />
        <img className="hero_back" src={hero_back} alt="hero_back" />

        <motion.div
          className="calories"
          transition={transition}
          whileInView={{ left: mobile ? '1rem' : '-16rem' }}
          initial={{ left: mobile ? '5rem' : '-4rem' }}
        >
          <img src={calories} alt="" />
          <div className="">
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
