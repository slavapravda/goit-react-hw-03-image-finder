import { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import searchApi from '../searchApi';
import s from './ImageGallery.module.css';

class ImageGallery extends Component {
  state = {
    image: null,
    loading: false,
    page: 1,
    error: null,
    showBtn: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, total } = this.state;
    const prevName = prevProps.searchName;
    const nextName = this.props.searchName;


    if (prevName !== nextName) {
      this.setState({ loading: true, image: null, showBtn: false, });

      searchApi(nextName, page)
        .then(res => res.hits)
        .then(image => this.setState({ image }))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false, showBtn: true}));
    }

    if (prevState.page !== page) {
      searchApi(nextName, page)
        .then(res => res.hits)
        .then(image =>
          this.setState({
            image: [...prevState.image, ...image],
          })
        )
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  onLoadMoreBtnClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { loading, image, error, showBtn } = this.state;
    const { onLoadMoreBtnClick } = this;

    return (
      <>
        {error && <h1>{error.message}</h1>}
        {loading && <Loader />}
        {image && (
          <ul className={s.imageGallery}>
            {image.map(img => (
              <ImageGalleryItem image={img} alt={img.tags} key={img.id} />
            ))}
          </ul>
        )}
        {showBtn && <Button onClick={onLoadMoreBtnClick} />}
      </>
    );
  }
}

export default ImageGallery;
