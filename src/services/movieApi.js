import axios from 'axios';

export const getDataMovies = async (endPoint, page = 1) => {
    try {
        const response = await axios({
            method: 'get',
            baseURL: `https://api.themoviedb.org/3/`,
            url: `${endPoint}`,
            timeout: 5000, // 5 секунд тайм-аута
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            params: {
                api_key: process.env.REACT_APP_MOVIE_API_KEY,
                page: `${page}`,
                language: 'uk',
            },
        });
        const data = await response.data;
        return data;
    } catch (error) {
        throw error;
    }
};
