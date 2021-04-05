import React from 'react';
import PropTypes from 'prop-types';
import style from './Sections.module.css';

const Sections = ({ title, children }) => (
  <section className={style.section}>
    <h2>{title}</h2>
    {children}
  </section>
);

Sections.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Sections;
