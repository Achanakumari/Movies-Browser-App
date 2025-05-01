import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import styles from "./Favorites.module.css";

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    setFavorites(stored ? JSON.parse(stored) : []);
  }, []);

  const handleRemove = (id: string) => {
    const updated = favorites.filter((movie) => movie.imdbID !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Your Favorite Movies</h2>
      <div className={styles.grid}>
        {favorites.length ? (
          favorites.map((movie) => (
            <div key={movie.imdbID}>
              <MovieCard movie={movie} />
              <button onClick={() => handleRemove(movie.imdbID)}>Remove</button>
            </div>
          ))
        ) : (
          <p>No favorites yet.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
