import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children }) => <div className="App">{children}</div>;

Container.prototype = {
  children: PropTypes.node.isRequired,
};

export default Container;
