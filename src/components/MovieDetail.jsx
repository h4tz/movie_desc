import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { MovieContext } from '../contexts/MovieContext';

const MovieDetail = () => {
  const { id } = useParams();
  const { selectedMovie, setSelectedMovie } = useContext(MovieContext);
  


  useEffect(() => {
    const fetchMovie = async () => {
      const apiKey = '26384cad';
      const response = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${apiKey}`);
      setSelectedMovie(response.data);
    };

    fetchMovie();
  }, [id, setSelectedMovie]);

  if (!selectedMovie) return <div>Loading...</div>;

  return (
    <div>
      <h2>{selectedMovie.Title}</h2>
      <p>{selectedMovie.Plot}</p>
      <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
    </div>
  );
};

export default MovieDetail;
