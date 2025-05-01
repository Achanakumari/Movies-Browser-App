import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services/api";
import styles from "./MovieDetails.module.css";

const MovieDetails: React.FC = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    if (id) {
      getMovieDetails(id).then(setMovie);
    }
  }, [id]);
  

  if (!movie) return <p>Loading...</p>;

  return (
    <div className={styles.container}>
      <img src={movie.Poster} alt={movie.Title} className={styles.poster} />
      <h1 className={styles.title}>{movie.Title}</h1>
      <p className={styles.text}><strong>Genre:</strong> {movie.Genre}</p>
      <p className={styles.text}><strong>Director:</strong> {movie.Director}</p>
      <p className={styles.text}><strong>Plot:</strong> {movie.Plot}</p>
      <p className={styles.text}><strong>Ratings:</strong> {movie.imdbRating}</p>
    </div>
  );
};

export default MovieDetails;
