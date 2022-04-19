import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getDataMovies } from '../../services/movieApi';
import { useParams } from 'react-router-dom';
import { AuthorsListStyled } from './Cast.styled';
import defaultImage from '../../images/defaultImage.jpg';
export default function Cast({ lang }) {
    const [movieCredits, setMovieCredits] = useState(null);
    const { movieId } = useParams();
    const authorList =
        movieCredits &&
        movieCredits.map(author => (
            <li key={author.id}>
                <img
                    src={
                        author.profile_path
                            ? `https://image.tmdb.org/t/p/w500/${author.profile_path}`
                            : defaultImage
                    }
                    alt={author.original_name}
                />
                <p>
                    <b>{author.name}</b>
                </p>
                <p>
                    <b>Character:</b> {author.character}
                </p>
            </li>
        ));

    useEffect(() => {
        movieId &&
            getDataMovies(`/movie/${movieId}/credits`, 1, lang).then(
                movieCredits => setMovieCredits(movieCredits.cast)
            );
    }, [movieId, lang]);

    return (
        <>
            <AuthorsListStyled>{authorList}</AuthorsListStyled>
        </>
    );
}

Cast.propTypes = {
    lang: PropTypes.string,
};
