import React from 'react';
import style from './Button.module.css';

interface Props {
  onClick: () => void;
}

const Button = ({ onClick }: Props) => (
  <button type="button" className={style.button} onClick={onClick}>
    Load more
  </button>
);

export default Button;
