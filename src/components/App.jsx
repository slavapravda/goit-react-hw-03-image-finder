import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchName: '',
    page: 1,
  };

  formSearchHandler = searchName => {
    this.setState({
      searchName,
      page: 1,
    });
  };

  onLoadMoreBtnClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { formSearchHandler, onLoadMoreBtnClick } = this;
    const { searchName, page } = this.state;

    return (
      <div>
        <Searchbar onSubmit={formSearchHandler} searchName={searchName} />
        <ImageGallery
          searchName={searchName}
          page={page}
          onLoadMoreBtnClick={onLoadMoreBtnClick}
        />
      </div>
    );
  }
}
