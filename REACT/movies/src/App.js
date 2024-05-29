import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList';
import FiltersSection from './components/FiltersSection';
import { useState } from 'react';
import MovieForm from './components/MovieForm';

function App() {
  var baseMovies = [
    {
      name: "The Shawshank Redemption",
      gender: "Drama",
      rating: 5
    },
    {
      name: "The Godfather",
      gender: "Crime",
      rating: 5
    },
    {
      name: "The Dark Knight",
      gender: "Action",
      rating: 4
    }
  ];
  const [movies, setMovies] = useState(baseMovies);

  
  return <>
    <MovieForm movies={baseMovies} setMovies={setMovies} />
    <FiltersSection movies={baseMovies} setMovies={setMovies} />
    <h1>Movies</h1>
    <MovieList movies={movies} />
  </>;
}

export default App;
