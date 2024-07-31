import React, { useState, useContext } from 'react';
import axios from 'axios';
import { MovieContext } from '../contexts/MovieContext';

const MovieSearch = () => {
  const [query, setQuery] = useState('');
  const { setMovies } = useContext(MovieContext);

  const handleSearch = async (e) => {
    e.preventDefault();
    const apiKey = '26384cad'; 
    try {
      const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=${apiKey}`);
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Failed to fetch movies. Please check your API key and try again.");
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
};

export default MovieSearch;
