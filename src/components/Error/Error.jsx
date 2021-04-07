import React from 'react';
import style from './Error.module.css';

const Error = ({ text }) => <h2 className={style.error}>{text}</h2>;

export default Error;
