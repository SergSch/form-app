import React, { useState } from 'react';
import classes from './Header.module.css';
import logo from './../../assets/images/logo.svg';
import Navigation from './Navigation/Navigation';
import HeadRightBlock from './HeadRightBlock/HeadRightBlock';
import { FaHamburger } from 'react-icons/fa';
import { FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="container">
      <div className={classes.wrap}>
        <div className={classes.logo}>
          <Link to={'/'}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className={classes.desktop}>
          <Navigation />
          <HeadRightBlock />
        </div>
        <div className={`${classes.mobile} ${menu ? classes.active : ''}`}>
          <FaWindowClose
            className={classes.close}
            onClick={() => setMenu(!menu)}
          />
          <Navigation />
          <HeadRightBlock />
        </div>
        <FaHamburger className={classes.icon} onClick={() => setMenu(!menu)} />
      </div>
    </div>
  );
};

export default Header;
