import React, { useState } from 'react';
import './testimonials.scss';

import { testimonialsData } from '../../data/testimonialsData';

const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const tLenght = testimonialsData.length;

  return (
    <div className="Testimonials ">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="stroke-text">What they</span>
        <span className="h2">say about us</span>

        <span>{testimonialsData[selected].review}</span>
        <span>
          <span style={{ color: 'var(--orange)' }}>{testimonialsData[selected].name}</span> -{' '}
          {testimonialsData[selected].status}
        </span>
        <span></span>
      </div>
      <div className="right-t"></div>
    </div>
  );
};

export default Testimonials;
