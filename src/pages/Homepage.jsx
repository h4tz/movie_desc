import React from 'react';
import MovieSearch from '../components/MovieSearch';
import MovieList from '../components/MovieList';

const Home = () => {
  return (
    <div>
      <h1>Movie Search</h1>
      <MovieSearch />
      <MovieList />
    </div>
  );
};

export default Home;
