import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getDataMovies } from '../services/movieApi';

function HomePage() {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const location = useLocation();
    const trendingMoviesList = trendingMovies.map(trendingMovie => (
        <li key={trendingMovie.id}>
            <Link
                to={{
                    pathname: '/movies/' + trendingMovie.id,
                    state: { detail: location },
                }}
            >
                {trendingMovie.title}
            </Link>
        </li>
    ));

    useEffect(() => {
        getDataMovies('trending/movie/day', 1).then(movie =>
            setTrendingMovies(movie.results)
        );
    }, []);

    return (
        <>
            <h2>Trending today</h2>
            <ul>{trendingMoviesList}</ul>
        </>
    );
}
export default HomePage;
