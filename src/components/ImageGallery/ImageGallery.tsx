import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import style from './ImageGallery.module.css';

interface Props {
  images: [];
  onClickImage: (x: string) => void;
}

const ImageGallery = ({ images, onClickImage }: Props) => (
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
