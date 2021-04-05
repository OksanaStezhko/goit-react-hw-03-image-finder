import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeedbackOptionsItem from '../FeedbackOptionsItem';

class FeedbackOptions extends Component {
  render() {
    const { options, onClickButton } = this.props;
    return (
      <ul>
        {options.map(option => (
          <FeedbackOptionsItem
            key={option}
            buttonName={option}
            onClickButton={() => {
              onClickButton(option);
            }}
          />
        ))}
      </ul>
    );
  }
}

FeedbackOptions.propTypes = {
  option: PropTypes.arrayOf(
    PropTypes.shape({ option: PropTypes.string.isRequired }),
  ),
  onClickButton: PropTypes.func.isRequired,
};

export default FeedbackOptions;
