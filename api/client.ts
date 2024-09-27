import axios from 'axios';

const baseURL = 'https://fakestoreapi.com/';

const Client = axios.create({ baseURL });

export default Client;
