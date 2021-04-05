import React, { Component } from 'react';
import Container from './components/Container';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import fetchImg from './api/api-pixabay';

class App extends Component {
  state = {
    images: [],
    totalHits: 0,
    searchQuery: '',
    currentPage: 1,
    error: null,
    isLoading: false,
  };

  handleChangeQuery = query => {
    this.setState({
      searchQuery: query,
      images: [],
      totalHits: 0,
      currentPage: 1,
    });
  };

  handleClick = () => {
    this.fetchApi();
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchApi();
    }
  }

  fetchApi() {
    const { currentPage, searchQuery } = this.state;
    const options = { currentPage, searchQuery };

    fetchImg(options)
      .then(({ hits, totalHits }) => {
        this.setState({ totalHits: totalHits });
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          currentPage: prevState.currentPage + 1,
        }));
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.handleChangeQuery} />
        <ImageGallery images={this.state.images}></ImageGallery>
        <Button onClick={this.handleClick} />
      </Container>
    );
  }
}

export default App;
