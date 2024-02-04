import React from 'react';
import classes from './SubHeader.module.css';
import subLogo from './../../assets/images/logo_subheader.svg';
import arrow from './../../assets/images/arrow.svg';
import { Link } from 'react-router-dom';

const SubHeader = ({ text, page }) => {
  return (
    <div className={classes.wrap}>
      <img src={subLogo} alt="subLogo" />
      {text && text}
      {page && <h2 className={classes.title}>{page}</h2>}
      <div className={classes.route}>
        <Link to={'/'}>{page && <h4>Home </h4>}</Link>
        {page && <img src={arrow} alt="arrow" />}
        {page && <h4>{page}</h4>}
      </div>
    </div>
  );
};

export default SubHeader;
