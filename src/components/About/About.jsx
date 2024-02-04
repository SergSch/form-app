import React from 'react';
import classes from './About.module.css';
import { about } from './../../utils/data';
import AboutItem from './AboutItem/AboutItem';

const About = () => {
  return (
    <div className={classes.wrap}>
      <div className="container">
        <div className={classes.aboutWrap}>
          {about.map((elem) => (
            <AboutItem key={elem.id} {...elem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
