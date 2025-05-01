// MovieCard.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './MovieCard.module.css';

interface MovieCardProps {
  movie: {
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
  };
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (isFavorite) {
      // Remove from favorites
      const updatedFavorites = storedFavorites.filter((fav: any) => fav.imdbID !== movie.imdbID);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      // Add to favorites
      storedFavorites.push(movie);
      localStorage.setItem('favorites', JSON.stringify(storedFavorites));
    }
    setIsFavorite(!isFavorite);
  };

  const handleRemoveClick = () => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const updatedFavorites = storedFavorites.filter((fav: any) => fav.imdbID !== movie.imdbID);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsFavorite(false); // Update state to reflect removal
  };

  return (
    <div className={styles.card}>
      <img src={movie.Poster} alt={movie.Title} className={styles.poster} />
      <h3 className={styles.title}>{movie.Title}</h3>
      <p className={styles.year}>{movie.Year}</p>
      <div className={styles.buttonGroup}>
        <button onClick={handleFavoriteClick} className={styles.favoriteButton}>
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
        <Link to={`/movie/${movie.imdbID}`} className={styles.moreInfoButton}>
          More Info
        </Link>
        {isFavorite && (
          <button onClick={handleRemoveClick} className={styles.removeButton}>
            Remove from Favorites
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
