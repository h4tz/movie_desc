import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MovieContext } from '../contexts/MovieContext';

const MovieList = () => {
  const { movies } = useContext(MovieContext);

  return (
    <div>
      {movies.map(movie => (
        <div key={movie.imdbID}>
          <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
