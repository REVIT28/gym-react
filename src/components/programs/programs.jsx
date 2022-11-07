import React from 'react';
import './programs.scss';
import RightArrow from '../../assets/rightArrow.png';
import { programsData } from '../../data/programsData';

const Programs = () => {
  return (
    <div className="Programs" id="programs">
      <div className="h2">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>

      <div className="programm-categories">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
