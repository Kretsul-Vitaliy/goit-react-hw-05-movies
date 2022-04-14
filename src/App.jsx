import Header from './components/header';
import HomePage from './pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';
import MoviesPage from './pages/MoviesPage';
import { Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './theme/GlobalStyle.styled';

export default function App() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <hr />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/movies/:movieId">
                    <MovieDetailPage />
                </Route>
                <Route path="/movies">
                    <MoviesPage />
                </Route>
            </Switch>
        </>
    );
}
