import React, { Component } from 'react';
import Container from './components/Container';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Loader from './components/Loader';
import Modal from './components/Modal';
import Error from './components/Error';

import fetchImg from './api/api-pixabay';

const PAGESIZE = 12;

interface IState {
  images: [];
  totalHits: number;
  searchQuery: string;
  currentPage: number;
  error: Error | null;
  isLoading: boolean;
  largeImage: string;
  showModal: boolean;
  message: string;
}

class App extends Component {
  state: IState = {
    images: [],
    totalHits: 0,
    searchQuery: '',
    currentPage: 1,
    error: null,
    isLoading: false,
    largeImage: '',
    showModal: false,
    message: '',
  };

  componentDidUpdate(prevProps: {}, prevState: IState, snapshot: boolean) {
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

  getSnapshotBeforeUpdate(prevProps: {}, prevState: IState) {
    if (prevState.images.length < this.state.images.length) return true;
    return false;
  }

  handleChangeQuery = (query: string) => {
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

  handleClickImage = (imageItem: string) => {
    this.setState({
      showModal: true,
      largeImage: imageItem,
    });
  };

  closeModal = () => {
    this.setState((prevState: IState) => ({
      largeImage: '',
      showModal: !prevState.showModal,
    }));
  };

  fetchApi() {
    const { currentPage, searchQuery } = this.state;
    const options = { currentPage, searchQuery };
    this.setState({ isLoading: true });

    fetchImg(options)
      .then(({ hits, totalHits }) => {
        this.setState({ totalHits: totalHits });
        this.setState((prevState: IState) => ({
          images: [...prevState.images, ...hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const {
      images,
      isLoading,
      totalHits,
      error,
      showModal,
      largeImage,
      searchQuery,
    } = this.state;
    const showButton = totalHits > PAGESIZE;

    return (
      <Container>
        <Searchbar onSubmit={this.handleChangeQuery} />
        <>
          {(error && (
            <Error
              text={'Что-то пошло не так, попробуйте еще раз сделать запрос...'}
            />
          )) ||
            (totalHits === 0 && searchQuery && !isLoading && (
              <Error
                text={'По вашему запросу ничего не найдено, повторите попытку.'}
              />
            ))}
        </>

        <ImageGallery
          images={images}
          onClickImage={this.handleClickImage}
        ></ImageGallery>
        <> {isLoading && <Loader />}</>
        <> {showButton && <Button onClick={this.handleClickButton} />}</>
        <>
          {showModal && (
            <Modal onClose={this.closeModal} largeImage={largeImage} />
          )}
        </>
      </Container>
    );
  }
}

export default App;
