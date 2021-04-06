import React from 'react';

const ImageGalleryItem = ({ webformatURL, onClickImage }) => (
  <li className="ImageGalleryItem" onClick={onClickImage}>
    <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
  </li>
);
export default ImageGalleryItem;
