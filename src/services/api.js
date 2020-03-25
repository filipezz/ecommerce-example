import axios from 'axios';

const api = axios.create({
  baseURL: `https://my-json-server.typicode.com/filipezz/ecommerce-example`,
});

export default api;
