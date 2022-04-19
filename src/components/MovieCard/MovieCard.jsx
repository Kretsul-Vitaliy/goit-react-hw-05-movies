import React from 'react';
import { v4 } from 'uuid';
import Section from '../Section';
import {
    MovieCardImg,
    MovieCardImgBox,
    MovieCardInfo,
} from './MovieCard.styled';
import defaultImage from '../../images/defaultImage.jpg';
function movieCard({ movieDetailId, genreList, lang }) {
    const movieCardListLang = [
        {
            id: v4(),
            code: 'en',
            score: 'User score',
            overview: 'Overview',
            genres: 'Genres',
        },
        {
            id: v4(),
            code: 'uk',
            score: 'Оцінка користувачів',
            overview: 'Опис',
            genres: 'Жанри',
        },
        {
            id: v4(),
            code: 'ru',
            score: 'Оценка пользователей',
            overview: 'Обзор',
            genres: 'Жанры',
        },
    ];
    const menuListFilter = movieCardListLang.filter(language => {
        return language.code.includes(`${lang}`);
    });

    return movieDetailId ? (
        <>
            <Section title={movieDetailId.title}>
                <MovieCardImgBox>
                    <MovieCardImg
                        src={
                            movieDetailId.poster_path
                                ? `https://image.tmdb.org/t/p/w500/${movieDetailId.poster_path}`
                                : defaultImage
                        }
                        alt=""
                    />
                    <MovieCardInfo>
                        <h3>{movieDetailId.title}</h3>
                        <h4>
                            {menuListFilter[0].score}:{' '}
                            {movieDetailId.vote_average * 10}%
                        </h4>
                        <h3>{menuListFilter[0].overview}</h3>
                        <p>{movieDetailId.overview}</p>
                        <h3>{menuListFilter[0].genres}</h3>
                        <ul>{genreList}</ul>
                    </MovieCardInfo>
                </MovieCardImgBox>
            </Section>
        </>
    ) : null;
}

export default movieCard;
