import React from 'react';
import classes from './HeadRightBlock.module.css';
import accaunt from './../../../assets/images/headerIcons/accaunt.svg';
import search from './../../../assets/images/headerIcons/search.svg';
import heart from './../../../assets/images/headerIcons/heart.svg';
import cart from './../../../assets/images/headerIcons/cart-outlined.svg';

const HeadRightBlock = () => {
  const headImg = [
    {
      id: 1,
      img: accaunt,
      title: 'accaunt',
    },
    {
      id: 2,
      img: search,
      title: 'search',
    },
    {
      id: 3,
      img: heart,
      title: 'heart',
    },
    {
      id: 4,
      img: cart,
      title: 'cart',
    },
  ];
  return (
    <>
      <div className={classes.wrap}>
        {headImg.map((elem) => (
          <img
            key={elem.id}
            src={elem.img}
            alt={elem.title}
            className={classes.img}
          />
        ))}
      </div>
    </>
  );
};

export default HeadRightBlock;
