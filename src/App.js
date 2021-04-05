import React, { Component } from 'react';
import Container from './components/Container';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';

import fetchImg from './api/api-pixabay';

// const PAGESIZE = 12;

class App extends Component {
  state = {
    images: [],
    totalHits: 0,
    searchQuery: '',
    currentPage: 1,
    error: null,
  };

  componentDidMount() {
    fetchImg().then(({ hits, totalHits }) => {
      this.setState({ totalHits: totalHits });
      this.setState(prevState => ({ images: [...prevState.images, ...hits] }));
    });
  }

  render() {
    return (
      <Container>
        <Searchbar />
        <ImageGallery images={this.state.images}></ImageGallery>
      </Container>
    );
  }
}

export default App;
