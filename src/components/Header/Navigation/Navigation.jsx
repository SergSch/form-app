import React from 'react';
import classes from './Navigation.module.css';
import { navRef } from './../../../utils/data';

const Navigation = () => {
  return (
    <div className={classes.wrap}>
      {navRef.map((elem) => (
        <a key={elem.id} href="!#">
          {elem.ref}
        </a>
      ))}
    </div>
  );
};

export default Navigation;
