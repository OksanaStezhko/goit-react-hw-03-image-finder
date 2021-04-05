import axios from 'axios';

const keyApi = '20047833-7ab7ad4719e2250c2f7b848a4';

axios.defaults.baseURL = `https://pixabay.com/api/?key=${keyApi}&per_page=12`;

const fetchImg = () => {
  return axios

    .get(`https://pixabay.com/api/?key=${keyApi}&per_page=12&q=forest&page=1`)
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(console.error);
};

export default fetchImg;

//   `https://pixabay.com/api/?key=${keyApi}&per_page=12&q=${this.searchQuery}&page=${this.page}`
