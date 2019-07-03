import axios from 'axios';

const KEY = 'AIzaSyC76Onsxi9BSh2yKyuDu5Xy9yf_vXuQqgc';

// to make export for axios call with my key added to it.
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
})