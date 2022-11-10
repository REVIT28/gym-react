import React, { useState } from 'react';
import './header.scss';
import Logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import Bars from '../../assets/bars.png';

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header">
      <img src={Logo} alt="" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{ backgroundColor: 'var(--appColor)', padding: '0.5rem', borderRadius: '6px' }}
          className=""
          onClick={() => setMenuOpened(true)}
        >
          <img style={{ width: '1.5rem', height: '1.5rem' }} src={Bars} alt="" />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link onClick={() => setMenuOpened(false)} to="home" span={true} smooth={true}>
              Home
            </Link>
          </li>
          <li>
            <Link span={true} smooth={true} onClick={() => setMenuOpened(false)} to="programs">
              Programs
            </Link>
          </li>
          <li>
            <Link to="reasons" span={true} smooth={true} onClick={() => setMenuOpened(false)}>
              Why us
            </Link>
          </li>
          <li>
            <Link span={true} smooth={true} onClick={() => setMenuOpened(false)} to="plans">
              Plans
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpened(false)} to="testimonials" span={true} smooth={true}>
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
