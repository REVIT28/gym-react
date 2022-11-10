import React, { useState } from 'react';
import './testimonials.scss';

import rightArrow from '../../assets/rightArrow.png';
import leftArrow from '../../assets/leftArrow.png';

import { testimonialsData } from '../../data/testimonialsData';

import { motion } from 'framer-motion';

const Testimonials = () => {
  const transition = { type: 'spring', duration: 3 };
  const [selected, setSelected] = useState(0);
  const tLenght = testimonialsData.length;

  return (
    <div className="Testimonials " id="testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span className="h3">say about us</span>

        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          transition={transition}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span style={{ color: 'var(--orange)' }}>{testimonialsData[selected].name}</span> -{' '}
          {testimonialsData[selected].status}
        </span>
        <span></span>
      </div>
      <div className="right-t">
        <motion.div
          className=""
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
          className=""
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.img
          src={testimonialsData[selected].image}
          alt=""
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          transition={transition}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
        />

        <div className="arrows">
          <img
            onClick={() =>
              selected === 0 ? setSelected(tLenght - 1) : setSelected((prev) => prev - 1)
            }
            src={leftArrow}
            alt=""
          />
          <img
            onClick={() =>
              selected === tLenght - 1 ? setSelected(0) : setSelected((prev) => prev + 1)
            }
            src={rightArrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
