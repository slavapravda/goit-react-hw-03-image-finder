import { Component } from 'react';

import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  getLargeImgUrl = event => {
    this.props.onClickImg(event.target.dataset.url);
  };

  render() {
    const { id, smallImg, largeImg, alt } = this.props;
    return (
      <li className={s.ImageGalleryItem}>
        <img
          className={s.ImageGalleryItemImage}
          id={id}
          src={smallImg}
          alt={alt}
          data-url={largeImg}
          onClick={this.getLargeImgUrl}
        />
      </li>
    );
  }
}
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  smallImg: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onClickImg: PropTypes.func.isRequired,
};

// const ImageGalleryItem = ({ id, smallImg, largeImg, alt, onClickImg }) => {
//   const getLargeImgUrl = event => {
//     onClickImg(event.target.dataset.url);
//     console.log(event.target.dataset);
//   };

//   return (
//     <li className={s.ImageGalleryItem}>
//       <img
//         className={s.ImageGalleryItemImage}
//         id={id}
//         src={smallImg}
//         alt={alt}
//         data-url={largeImg}
//         onClick={getLargeImgUrl}
//       />
//     </li>
//   );
// };

// export default ImageGalleryItem;
