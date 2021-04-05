import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Container.module.css';

class Container extends Component {
  static propTypes = { children: PropTypes.node.isRequired };
  render() {
    const { children } = this.props;
    return <div className={style.container}>{children}</div>;
  }
}

export default Container;
