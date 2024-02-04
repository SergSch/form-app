import React from 'react';
import classes from './AboutItem.module.css';

const AboutItem = ({ title, body, img }) => {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <div>
        <img src={img} alt={title} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default AboutItem;
