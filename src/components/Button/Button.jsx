import React from 'react';
import style from './Button.module.css';

const Button = ({ onClick }) => (
  <button type="button" className={style.button} onClick={onClick}>
    Load more
  </button>
);

export default Button;
