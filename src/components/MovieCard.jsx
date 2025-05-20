import React from "react";
import "./MovieCard.css";

export default function MovieCard({ movie, liked, disliked, onLike, onDislike }) {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>⭐ {movie.rating}</p>
      <div className="actions">
        <button
          className={liked ? "liked" : ""}
          onClick={() => onLike(movie.id)}
        >
          👍
        </button>
        <button
          className={disliked ? "disliked" : ""}
          onClick={() => onDislike(movie.id)}
        >
          👎
        </button>
      </div>
    </div>
  );
}
