import { Route, Switch } from 'react-router-dom';
import { GlobalStyle } from '../../theme/GlobalStyle.styled';
import { useState, lazy, Suspense } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Header from '../Header';
import Loader from '../Loader';
// import HomePage from '../../pages/HomePage';
// import MovieDetailPage from '../../pages/MovieDetailPage';
// import MoviesPage from '../../pages/MoviesPage';
// import NotFoundPage from '../../pages/NotFoundPage';

const HomePage = lazy(() =>
    import('../../pages/HomePage' /*webpackChunkName: "Home__page"*/)
);
const MovieDetailPage = lazy(() =>
    import(
        '../../pages/MovieDetailPage' /*webpackChunkName: "Movie__Detail__page"*/
    )
);
const MoviesPage = lazy(() =>
    import('../../pages/MoviesPage' /*webpackChunkName: "Movies__page"*/)
);
const NotFoundPage = lazy(() =>
    import('../../pages/NotFoundPage' /*webpackChunkName: "Not__Found__page"*/)
);
export default function App() {
    const [lang, setLang] = useState('uk');
    const handleOnChange = e => {
        setLang(e.target.value);
    };
    return (
        <>
            <ToastContainer autoClose={2000} />
            <GlobalStyle />
            <Header lang={lang} handleOnChange={handleOnChange} />
            <hr />
            <Suspense fallback={<Loader />}>
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
                    <Route>
                        <NotFoundPage />
                    </Route>
                </Switch>
            </Suspense>
        </>
    );
}
