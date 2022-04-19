import React, { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { useParams } from 'react-router-dom';
import { getDataMovies } from '../services/movieApi';
import MovieCard from '../components/movieCard/MovieCard';
import Button from '../components/button/Button';
import { useHistory, useLocation } from 'react-router-dom';

import AdditionalInformation from '../components/additionalInformation/AdditionalInformation';

export default function MovieDetailPage({ lang }) {
    const history = useHistory();
    const location = useLocation();
    const { movieId } = useParams();
    const [movieDetailId, setMovieDetailId] = useState(null);

    const genreList =
        movieDetailId &&
        movieDetailId.genres.map(genre => <li key={genre.id}>{genre.name}</li>);
    const handleGoBack = () => {
        history.push(location.state?.detail ?? '/');
    };
    useEffect(() => {
        movieId &&
            getDataMovies(`movie/${movieId}`, 1, lang).then(movieDetails =>
                setMovieDetailId(movieDetails)
            );
    }, [lang, movieId]);

    const buttonBackListLang = [
        {
            id: v4(),
            code: 'en',
            buttonBack: 'Go back',
        },
        {
            id: v4(),
            code: 'uk',
            buttonBack: 'Повернутися',
        },
        {
            id: v4(),
            code: 'ru',
            buttonBack: 'Назад',
        },
    ];
    const buttonBackListLangFilter = buttonBackListLang.filter(language => {
        return language.code.includes(`${lang}`);
    });
    return movieDetailId ? (
        <>
            <div>
                <Button type="button" active={true} onClick={handleGoBack}>
                    {buttonBackListLangFilter[0].buttonBack}
                </Button>
            </div>
            <MovieCard
                lang={lang}
                movieDetailId={movieDetailId}
                genreList={genreList}
            />
            <AdditionalInformation movieDetailId={movieDetailId} lang={lang} />
            <div style={{ marginBottom: 25 }}>
                <Button type="button" active={true} onClick={handleGoBack}>
                    {buttonBackListLangFilter[0].buttonBack}
                </Button>
            </div>
        </>
    ) : null;
}
