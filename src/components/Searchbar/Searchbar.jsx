import { Component } from 'react';
import s from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    searchName: '',
  };

  handeChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchName.trim() === '') {
      return;
    }
    this.props.onSubmit(this.state.searchName);

    this.reset();
  };

  reset = () => {
    this.setState({
      searchName: '',
    });
  };

  render() {
    const { handeChange, handleSubmit } = this;
    const { searchName } = this.state;
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            onChange={handeChange}
            value={searchName}
            className={s.SearchFormInput}
            name="searchName"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
