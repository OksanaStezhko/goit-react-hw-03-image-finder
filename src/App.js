import React, { Component } from 'react';
import Container from './components/Container';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Loader from './components/Loader';
import Modal from './components/Modal';
import fetchImg from './api/api-pixabay';

const PAGESIZE = 12;

class App extends Component {
  state = {
    images: [],
    totalHits: 0,
    searchQuery: '',
    currentPage: 1,
    error: null,
    isLoading: false,
    largeImage: '',
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchApi();
    }
    if (snapshot) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevState.images.length < this.state.images.length) return true;
    return false;
  }

  handleChangeQuery = query => {
    this.setState({
      searchQuery: query,
      images: [],
      totalHits: 0,
      currentPage: 1,
      error: null,
      isLoading: false,
      showModal: false,
    });
  };

  handleClickButton = () => {
    this.fetchApi();
  };

  handleClickImage = () => {
    this.setState({ showModal: true });
  };

  fetchApi() {
    const { currentPage, searchQuery } = this.state;
    const options = { currentPage, searchQuery };
    this.setState({ isLoading: true });

    fetchImg(options)
      .then(({ hits, totalHits }) => {
        this.setState({ totalHits: totalHits });
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { images, isLoading, totalHits, error, showModal } = this.state;
    const showButton = totalHits > PAGESIZE;

    return (
      <Container>
        <Searchbar onSubmit={this.handleChangeQuery} />
        {!error && (
          <ImageGallery
            images={images}
            onClickImage={this.handleClickImage}
          ></ImageGallery>
        )}
        {isLoading && <Loader />}
        {showButton && <Button onClick={this.handleClickButton} />}
        {showModal && <Modal />}
      </Container>
    );
  }
}

export default App;
