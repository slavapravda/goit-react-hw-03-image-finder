import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';


export class App extends Component {
  state = {
    searchName: '',
  };

  formSearchHandler = searchName => {
    this.setState({
      searchName,
    });
  };

  render() {
    const { formSearchHandler } = this;
    const {searchName} = this.state

    return (
      <div>
        <Searchbar onSubmit={formSearchHandler} />
        <ImageGallery searchName={searchName}/>
      </div>
    );
  }
}
