import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesList from '../components/MoviesList/MoviesList';
import { getDataMovies } from '../services/movieApi';
import Section from '../components/Section';
import { v4 } from 'uuid';

function HomePage({ lang }) {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const location = useLocation();
    const titleListLang = [
        { id: v4(), code: 'uk', title: 'Сьогодні в тренді' },
        { id: v4(), code: 'ru', title: 'Сегодня в тренде' },
        { id: v4(), code: 'en', title: 'Trending today' },
    ];

    const titleListLangFilter = titleListLang.filter(language => {
        return language.code.includes(`${lang}`);
    });

    useEffect(() => {
        getDataMovies('trending/movie/day', 1, lang).then(movie =>
            setTrendingMovies(movie.results)
        );
    }, [lang]);

    return (
        <>
            <Section title={titleListLangFilter[0].title}>
                <MoviesList
                    trendingMovies={trendingMovies}
                    location={location}
                    lang={lang}
                />
            </Section>
        </>
    );
}
export default HomePage;
