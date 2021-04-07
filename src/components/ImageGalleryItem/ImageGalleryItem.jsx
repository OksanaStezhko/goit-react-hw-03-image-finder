import React from 'react';
import style from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, largeImage, onClickImage }) => (
  <li
    className={style.ImageGalleryItem}
    onClick={() => onClickImage(largeImage)}
  >
    <img src={webformatURL} alt="" className={style.ImageGalleryItem__image} />
  </li>
);

export default ImageGalleryItem;
