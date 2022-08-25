import { Component } from 'react';
import PropTypes from 'prop-types';

import s from './Searchbar.module.css';

import Notiflix from 'notiflix';

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
    const { searchName } = this.state;

    if (searchName.trim() === '') {
      return Notiflix.Notify.info('Введіть коректну назву');
    }

    if (searchName.trim() === this.props.searchName) {
      return Notiflix.Notify.failure('Введіть іншу назву пошуку');
    }

    this.props.onSubmit(searchName);

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
            value={searchName}
            onChange={handeChange}
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

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
