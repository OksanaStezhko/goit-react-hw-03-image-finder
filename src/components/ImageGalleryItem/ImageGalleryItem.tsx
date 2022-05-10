import React from 'react';
import style from './ImageGalleryItem.module.css';

interface Props {
  webformatURL: string;
  largeImage: string;
  onClickImage: (x: string) => void;
}
const ImageGalleryItem = ({
  webformatURL,
  largeImage,
  onClickImage,
}: Props) => (
  <li
    className={style.ImageGalleryItem}
    onClick={() => onClickImage(largeImage)}
  >
    <img src={webformatURL} alt="" className={style.ImageGalleryItem__image} />
  </li>
);

export default ImageGalleryItem;
