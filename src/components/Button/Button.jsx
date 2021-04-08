import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.module.css';

const Button = ({ onClick }) => (
  <button type="button" className={style.button} onClick={onClick}>
    Load more
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default Button;
