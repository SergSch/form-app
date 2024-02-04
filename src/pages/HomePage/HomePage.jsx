import React from 'react';
import classes from './HomePage.module.css';
import SubHeader from '../../components/SubHeader/SubHeader';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <SubHeader />
      <div className={classes.wrap}>
        <Link className="link" to={'/checkout'}>
          <p>Checkout</p>
        </Link>
        <Link className="link" to={'/contact'}>
          <p>Contact</p>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
