import React from 'react';
import LoaderMarckup from 'react-loader-spinner';

const Loader = () => (
  <div className="loader">
    <LoaderMarckup type="Puff" color="#303f9f" height={80} width={80} />
  </div>
);

export default Loader;
