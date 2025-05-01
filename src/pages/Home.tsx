import React, { useState } from "react";
import { searchMovies } from "../services/api";
import MovieCard from "../components/MovieCard";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    const data = await searchMovies(query);
    if (data?.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchBar}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className={styles.button} onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className={styles.grid}>
        {movies.map((movie: any) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
