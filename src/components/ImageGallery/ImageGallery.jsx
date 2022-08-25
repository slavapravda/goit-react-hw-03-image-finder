import { Component } from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

import searchImg from '../api/searchApi';

import s from './ImageGallery.module.css';

class ImageGallery extends Component {
  state = {
    image: [],
    loading: false,
    error: null,
    showBtn: false,
    largeImg: '',
    openModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.props;

    const prevName = prevProps.searchName;
    const nextName = this.props.searchName;

    if (prevName !== nextName) {
      this.setState({ loading: true, image: [], showBtn: false });

      searchImg(nextName, page)
        .then(data => data.hits)
        .then(image =>
          this.setState({
            image: [...image],
          })
        )
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false, showBtn: true }));
    }

    if (page > prevProps.page && page > 1) {
      this.setState({ loading: true });

      searchImg(nextName, page)
        .then(data => data.hits)
        .then(image =>
          this.setState(prevState => ({
            image: [...prevState.image, ...image],
          }))
        )
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false, showBtn: true }));
    }
  }

  openModal = largeImg => {
    this.setState({ largeImg });
  };

  render() {
    const { loading, image, error, showBtn, largeImg } = this.state;
    const { openModal } = this;
    const { onLoadMoreBtnClick } = this.props;

    return (
      <>
        {largeImg && <Modal onClick={openModal} url={largeImg} />}
        {error && <h1>{error.message}</h1>}
        {loading && <Loader />}
        {image && (
          <ul className={s.imageGallery}>
            {image.map(({ id, webformatURL, largeImageURL, tags }) => (
              <ImageGalleryItem
                smallImg={webformatURL}
                largeImg={largeImageURL}
                alt={tags}
                id={id}
                key={id}
                onClickImg={openModal}
              />
            ))}
          </ul>
        )}
        {showBtn && <Button onClick={onLoadMoreBtnClick} />}
      </>
    );
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  nextName: PropTypes.string,
  page: PropTypes.number,
  onLoadMoreBtnClick: PropTypes.func,
};
