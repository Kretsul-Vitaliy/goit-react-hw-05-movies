import React, { useEffect, useState } from 'react';
import { getDataMovies } from '../services/movieApi';
import { toast } from 'react-toastify';
import Searchbar from '../searchbar';
import MoviesList from '../components/moviesList/MoviesList';

function MoviesPage({ lang }) {
    const [searchQuery, setSearchQuery] = useState(
        () => JSON.parse(localStorage.getItem('searchQuery')) || ''
    );
    const [searchMovieDetailId, setSearchMovieDetailId] = useState(null);

    const handleSearchBarSubmit = async event => {
        await event.preventDefault();
        await setSearchQuery(event.target.searchQuery.value);
        if (event.target.searchQuery.value === '') {
            return toast.info('Введите имя');
        }
    };

    useEffect(() => {
        searchQuery &&
            getDataMovies('search/movie', 1, lang, searchQuery).then(
                movieDetails => setSearchMovieDetailId(movieDetails.results)
            );
        if (searchQuery) {
            localStorage.setItem('searchQuery', JSON.stringify(searchQuery));
        }
    }, [lang, searchQuery]);

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
