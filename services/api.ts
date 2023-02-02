import axios from 'axios';

export default axios.create({
    baseURL: 'https://mks-challenge-api-frontend.herokuapp.com/api',
});
