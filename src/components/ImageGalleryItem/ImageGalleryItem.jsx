import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image }) => {
  return (
    <li className={s.ImageGalleryItem} id={image.id}>
      <img
        className={s.ImageGalleryItemImage}
        src={image.webformatURL}
        alt={image.tags}
      />
    </li>
  );
};

export default ImageGalleryItem;
