import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ images }) => (
  <ul className="ImageGallery">
    {images.map(({ webformatURL, id }) => (
      <ImageGalleryItem key={id} webformatURL={webformatURL} />
    ))}
  </ul>
);

export default ImageGallery;
