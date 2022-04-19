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
} from './SearchMovieList.styled';

function SearchMoviesList({ searchMovieDetailId, location, lang }) {
    const history = useHistory();
    // console.log('history', history);
    const SearchMoviesList = searchMovieDetailId.map(SearchMovie => (
        <MoviesListItemStyled key={SearchMovie.id}>
            <Link
                to={{
                    pathname: `/movies/${SearchMovie.id}`,
                    state: { detail: history.location },
                }}
            >
                <img
                    src={`https://image.tmdb.org/t/p/w500/${SearchMovie.poster_path}`}
                    alt=""
                />

                <MovieListInfoBox>
                    <CircularProgressbarBox style={{ width: 45, height: 45 }}>
                        <CircularProgressbar
                            value={SearchMovie.vote_average * 10}
                            text={`${SearchMovie.vote_average * 10}%`}
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
                                        (SearchMovie.vote_average * 10) / 100
                                    } )`,
                                },
                            }}
                        />
                    </CircularProgressbarBox>
                    <MovieListInfoText>{SearchMovie.title}</MovieListInfoText>
                    <MovieListInfoDate>
                        {moment(SearchMovie.release_date)
                            .locale(`${lang}`)
                            .format('DD MMMM YYYY')}
                    </MovieListInfoDate>
                </MovieListInfoBox>
            </Link>
        </MoviesListItemStyled>
    ));
    return <MoviesListStyled>{SearchMoviesList}</MoviesListStyled>;
}

export default SearchMoviesList;
