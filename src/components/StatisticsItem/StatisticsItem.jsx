import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './StatisticsItem.module.css';

class StatisticsItem extends Component {
  render() {
    const { itemName, itemValue } = this.props;
    return (
      <li className={style.item}>
        <span>{itemName}:</span>
        <span>
          {itemValue}
          {itemName === 'positive feedback' ? '%' : ''}
        </span>
      </li>
    );
  }
}

StatisticsItem.propTypes = {
  itemName: PropTypes.string.isRequired,
  itemValue: PropTypes.number.isRequired,
};

export default StatisticsItem;
