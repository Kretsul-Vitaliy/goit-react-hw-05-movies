import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import moment from 'moment';
import 'moment/locale/ru';
import 'moment/locale/uk';
import {
    CircularProgressbarBox,
    MovieListInfoBox,
    MovieListInfoDate,
    MovieListInfoText,
    MoviesListItemStyled,
    MoviesListStyled,
} from './MovieList.styled';
import defaultImage from '../../images/defaultImage.jpg';
function MoviesList({ trendingMovies, location, lang }) {
    const history = useHistory();
    // console.log('history', history);
    const trendingMoviesList = trendingMovies.map(trendingMovie => (
        <MoviesListItemStyled key={trendingMovie.id}>
            <Link
                to={{
                    pathname: `/movies/${trendingMovie.id}`,
                    state: { detail: history.location },
                }}
            >
                <img
                    src={
                        trendingMovie.poster_path
                            ? `https://image.tmdb.org/t/p/w500/${trendingMovie.poster_path}`
                            : defaultImage
                    }
                    alt={trendingMovie.title}
                />

                <MovieListInfoBox>
                    <CircularProgressbarBox style={{ width: 45, height: 45 }}>
                        <CircularProgressbar
                            value={trendingMovie.vote_average * 10}
                            text={`${trendingMovie.vote_average * 10}%`}
                            background={true}
                            styles={{
                                text: {
                                    fill: '#f88',
                                    fontSize: '36px',
                                },
                                background: {
                                    fill: '#041101',
                                },
                                path: {
                                    stroke: `rgba(62, 220, 30, ${
                                        (trendingMovie.vote_average * 10) / 100
                                    } )`,
                                },
                            }}
                        />
                    </CircularProgressbarBox>
                    <MovieListInfoText>{trendingMovie.title}</MovieListInfoText>
                    <MovieListInfoDate>
                        {moment(trendingMovie.release_date)
                            .locale(`${lang}`)
                            .format('DD MMMM YYYY')}
                    </MovieListInfoDate>
                </MovieListInfoBox>
            </Link>
        </MoviesListItemStyled>
    ));
    return <MoviesListStyled>{trendingMoviesList}</MoviesListStyled>;
}

export default MoviesList;
