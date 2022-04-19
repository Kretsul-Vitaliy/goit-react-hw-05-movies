import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getDataMovies } from '../../services/movieApi';
import { v4 } from 'uuid';
export default function Reviews({ lang }) {
    const [movieReviews, setMovieReviews] = useState(null);
    const { movieId } = useParams();
    const ReviewsNoResultListLang = [
        {
            id: v4(),
            code: 'en',
            noReviews: 'We don`t have any reviews for this movie',
        },
        {
            id: v4(),
            code: 'uk',
            noReviews: 'У нас немає відгуків на цей фільм',
        },
        {
            id: v4(),
            code: 'ru',
            noReviews: 'У нас нет отзывов на этот фильм',
        },
    ];
    const ReviewsNoResultListLangFilter = ReviewsNoResultListLang.filter(
        language => {
            return language.code.includes(`${lang}`);
        }
    );

    const reviewsList =
        movieReviews > 0 ? (
            movieReviews.map(reviewAuthor => (
                <li key={reviewAuthor.id}>
                    <p>
                        <b>{reviewAuthor.author}</b>
                    </p>
                    <p>
                        <b>Content:</b> {reviewAuthor.content}
                    </p>
                </li>
            ))
        ) : (
            <p>
                <b>{ReviewsNoResultListLangFilter[0].noReviews}</b>
            </p>
        );
    useEffect(() => {
        movieId &&
            getDataMovies(`/movie/${movieId}/reviews`, 1, lang).then(
                movieReviews => setMovieReviews(movieReviews.results)
            );
    }, [movieId, lang]);
    return (
        <>
            <ol>{reviewsList}</ol>
        </>
    );
}

Reviews.propTypes = {
    lang: PropTypes.string,
};
