import axios from 'axios';

const getData = () => axios.create({
  baseURL: 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi',
  headers: { 'Content-type': 'application/json' },
}).get();

export default getData;
