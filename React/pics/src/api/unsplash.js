// Creating this file allows us to we will import the unsplash api file, rather than importing from the axios library
import axios from 'axios';

export default axios.create ({

    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 459b5b102b2d77eea989810f7aac33fabb5d9da7af3023c43abc65c36ce0aff1'
    }
});