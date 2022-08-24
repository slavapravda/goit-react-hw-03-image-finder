import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image }) => {
  const {key, webformatURL, alt} = image
  return (
    <li className={s.ImageGalleryItem} id={key}>
      <img
        className={s.ImageGalleryItemImage}
        src={webformatURL}
        alt={alt}
      />
    </li>
  );
};

export default ImageGalleryItem;
