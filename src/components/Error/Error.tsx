import React from 'react';
import style from './Error.module.css';

interface Props {
  text: string;
}

const Error = ({ text }: Props) => <h2 className={style.error}>{text}</h2>;

export default Error;
