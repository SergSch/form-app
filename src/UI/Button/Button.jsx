import React from 'react';
import classes from './Button.module.css';

const Button = ({ text, bgColor, left }) => {
  return (
    <button
      style={{
        background: bgColor ? '#b88e2f' : '',
        color: bgColor ? 'white' : '',
        marginLeft: bgColor ? '0' : '',
      }}
      className={classes.btn}
    >
      {text}
    </button>
  );
};

export default Button;
