import React from 'react';
import './footer.scss';

import GitHub from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className="Footer-container">
      <div className="blur blur-f"></div>
      <div className="blur blur-f-two"></div>
      <hr />
      <div className="footer">
        <div className="social-l">
          <img src={GitHub} alt="" />
          <img src={Instagram} alt="" />
          <img src={LinkedIn} alt="" />
        </div>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
