import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Notification.module.css';

class Notification extends Component {
  render() {
    const { message } = this.props;
    return <div className={style.item}>{message}</div>;
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
