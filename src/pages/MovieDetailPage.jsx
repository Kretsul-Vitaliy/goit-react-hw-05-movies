import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDataMovies } from '../services/movieApi';

function MovieDetailPage() {
    //   const history = useHistory();
    //   const location = useLocation();
    const { movieId } = useParams();
    const [movieDetailId, setMovieDetailId] = useState(null);
    useEffect(() => {
        movieId &&
            getDataMovies(`/movie/${movieId}}`).then(movieDetails =>
                setMovieDetailId(movieDetails)
            );
    }, [movieId]);

    return movieDetailId ? (
        <>
            <div>MovieDetailPage</div>
            <h3>{movieDetailId.title}</h3>
        </>
    ) : null;
}

export default MovieDetailPage;
