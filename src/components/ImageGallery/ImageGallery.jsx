import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import style from './ImageGallery.module.css';

const ImageGallery = ({ images, onClickImage }) => (
  <ul className={style.ImageGallery}>
    {images.map(({ webformatURL, largeImageURL, id }) => (
      <ImageGalleryItem
        key={id}
        webformatURL={webformatURL}
        onClickImage={onClickImage}
        largeImage={largeImageURL}
      />
    ))}
  </ul>
);

export default ImageGallery;
