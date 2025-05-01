// pages/Home.tsx
import React, { useState } from 'react';
import { searchMovies } from '../services/api';
import MovieCard from '../components/MovieCard';
import styles from './Home.module.css';
import { Movie } from '../types/Movie'; // ✅ import the type

const Home: React.FC = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]); // ✅ type your state
  const [error, setError] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const data = await searchMovies(query);
    if (data.Response === 'True') {
      setMovies(data.Search); // now TypeScript knows data.Search is Movie[]
    } else {
      setMovies([]);
      setError(data.Error);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSearch} className={styles.form}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
          className={styles.input}
        />
        <button type="submit" className={styles.searchButton}>Search</button>
      </form>

      {error && <p className={styles.error}>{error}</p>}

      <div className={styles.grid}>
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
