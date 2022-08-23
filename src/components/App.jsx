import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchName: '',
  };

  formSearchHandler = searchName => {
    console.log(searchName);
    this.setState({
      searchName,
    });
  };

  render() {
    const { formSearchHandler } = this;

    return (
      <div>
        <Searchbar onSubmit={formSearchHandler} />
        <ImageGallery/>
      </div>
    );
  }
}
