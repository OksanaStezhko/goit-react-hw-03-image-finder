import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images, onClickImage }) => (
  <ul className="ImageGallery">
    {images.map(({ webformatURL, id }) => (
      <ImageGalleryItem
        key={id}
        webformatURL={webformatURL}
        onClickImage={onClickImage}
      />
    ))}
  </ul>
);

export default ImageGallery;
