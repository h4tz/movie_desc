import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MovieProvider } from './contexts/MovieContext';
import Home from './pages/Homepage';
import Movie from './pages/Moviespage';

const App = () => {
  return (
    <MovieProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
      </Router>
    </MovieProvider>
  );
};

export default App;
