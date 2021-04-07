import axios from 'axios';
const PAGESIZE = 12;
const keyApi = '20047833-7ab7ad4719e2250c2f7b848a4';

axios.defaults.baseURL = `https://pixabay.com/api/?key=${keyApi}&per_page=12`;

const fetchImg = ({ currentPage, searchQuery }) => {
  const fetchString = `https://pixabay.com/api/?key=${keyApi}&per_page=${PAGESIZE}&q=${searchQuery}&page=${currentPage}`;
  return axios
    .get(fetchString)
    .then(response => response.data)
    .catch(console.error);
};

export default fetchImg;
