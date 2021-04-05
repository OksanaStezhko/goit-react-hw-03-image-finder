import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './FeedbackOptionsItem.module.css';

class FeedbackOptionsItem extends Component {
  render() {
    const { buttonName, onClickButton } = this.props;

    return (
      <li className={style.item}>
        <button type="button" className={style.button} onClick={onClickButton}>
          {buttonName}
        </button>
      </li>
    );
  }
}

FeedbackOptionsItem.propTypes = {
  buttonName: PropTypes.string.isRequired,
  onClickButton: PropTypes.func.isRequired,
};

export default FeedbackOptionsItem;
