import Header from '../header';
import HomePage from '../../pages/HomePage';
import MovieDetailPage from '../../pages/MovieDetailPage';
import MoviesPage from '../../pages/MoviesPage';
import { Route, Switch } from 'react-router-dom';
import { GlobalStyle } from '../../theme/GlobalStyle.styled';
import { useState } from 'react';

export default function App() {
    const [lang, setLang] = useState('uk');
    const handleOnChange = e => {
        setLang(e.target.value);
    };
    return (
        <>
            <GlobalStyle />
            <Header lang={lang} handleOnChange={handleOnChange} />
            <hr />
            <Switch>
                <Route exact path="/">
                    <HomePage lang={lang} />
                </Route>
                <Route path="/movies/:movieId">
                    <MovieDetailPage lang={lang} />
                </Route>
                <Route path="/movies">
                    <MoviesPage lang={lang} />
                </Route>
            </Switch>
        </>
    );
}
