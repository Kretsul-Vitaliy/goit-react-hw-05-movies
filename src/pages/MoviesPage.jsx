import React, { useEffect, useState } from 'react';
import { getDataMovies } from '../services/movieApi';
import { toast } from 'react-toastify';
import Searchbar from '../components/Searchbar';
import MoviesList from '../components/MoviesList/MoviesList';
import { useHistory } from 'react-router-dom';

function MoviesPage({ lang }) {
    const history = useHistory();
    const [searchQuery, setSearchQuery] = useState(
        () => JSON.parse(localStorage.getItem('searchQuery')) || ''
    );
    const [searchMovieDetailId, setSearchMovieDetailId] = useState([]);

    const handleSearchBarSubmit = async event => {
        await event.preventDefault();
        await setSearchQuery(event.target.searchQuery.value);
        if (event.target.searchQuery.value === '') {
            return toast.info('Введите имя');
        }
    };

    useEffect(() => {
        searchQuery &&
            getDataMovies('search/movie', 1, lang, searchQuery)
                .then(movieDetails =>
                    setSearchMovieDetailId(movieDetails.results)
                )
                .catch(error => {
                    toast.error('Фильм не найден');
                    history.replace('/movies');
                });

        if (searchQuery) {
            localStorage.setItem('searchQuery', JSON.stringify(searchQuery));
        }
    }, [lang, searchQuery, history]);

    return (
        <>
            <div>
                <Searchbar
                    onSubmit={handleSearchBarSubmit}
                    value={searchQuery}
                />
                {searchMovieDetailId && (
                    <MoviesList trendingMovies={searchMovieDetailId} />
                )}
            </div>
        </>
    );
}

export default MoviesPage;
