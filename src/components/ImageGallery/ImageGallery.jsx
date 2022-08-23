import { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import s from './ImageGallery.module.css';

class ImageGallery extends Component {
  state = {
    image: null,
    loading: false,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.searchName;
    const nextName = this.props.searchName;

    if (prevName !== nextName) {
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${nextName}&${this.state.page}=1&key=28740342-1947fe48ccb576993622995e0&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json())
        .then(image => this.setState({ image }))
        .catch(console.error)
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { loading, image } = this.state;
    const { searchName } = this.props;
    console.log(image);
    return (
      <>
        {loading && <Loader />}
        {!searchName && <div>Введите имя...</div>}
        {image && (
          <ul className={s.ImageGallery}>
            {image.hits.map(img => (
              <ImageGalleryItem image={img} alt={img.tags} key={img.id} />
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default ImageGallery;
