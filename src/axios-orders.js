import axios from 'axios';

const instance = axios.create({

    baseURL: 'https://toni-burger.firebaseio.com/'

});

export default instance;