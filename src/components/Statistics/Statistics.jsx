import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StatisticsItem from '../StatisticsItem';

class Statistics extends Component {
  render() {
    const { itemList } = this.props;
    return (
      <ul>
        {itemList.map(([key, value]) => (
          <StatisticsItem key={key} itemName={key} itemValue={value} />
        ))}
      </ul>
    );
  }
}

Statistics.propTypes = {
  itemList: PropTypes.array.isRequired,
};

export default Statistics;
