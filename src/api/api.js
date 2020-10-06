import axios from 'axios';

const api = axios.create({
  baseURL: 'http://www.residencia-ecommerce.us-east-1.elasticbeanstalk.com',
});


export default api;