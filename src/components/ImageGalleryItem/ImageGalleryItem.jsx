import React from 'react';

const ImageGalleryItem = ({ webformatURL }) => (
  <li className="ImageGalleryItem">
    <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
  </li>
);
export default ImageGalleryItem;
