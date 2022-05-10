import React, { Component } from 'react';
import style from './Searchbar.module.css';

interface Props {
  onSubmit: (textQuery: string) => void;
}

interface IState {
  query: string;
}

class Searchbar extends Component<Props> {
  state: IState = {
    query: '',
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ query: event.currentTarget.value });
  };

  handleSubmit = (event: React.FormEvent<Element>) => {
    event.preventDefault();

    const { query } = this.state;
    if (!query) return;

    this.props.onSubmit(query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <header className={style.Searchbar}>
        <form className={style.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={style.SearchForm__button}>
            <span className={style.SearchForm__button__label}>Search</span>
          </button>

          <input
            className={style.SearchForm__input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
