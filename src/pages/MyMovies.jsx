import React, { useState, useEffect } from "react";
import moviesData from "../data/movies"; // your movie data file

export default function MyMovies() {
  // We'll store liked and disliked movies by id in localStorage keys: "likes" and "dislikes"
  const [likes, setLikes] = useState([]);
  const [dislikes, setDislikes] = useState([]);

  useEffect(() => {
    setLikes(JSON.parse(localStorage.getItem("likes")) || []);
    setDislikes(JSON.parse(localStorage.getItem("dislikes")) || []);
  }, []);

  const handleLike = (movieId) => {
    if (likes.includes(movieId)) {
      // unlike
      const newLikes = likes.filter((id) => id !== movieId);
      setLikes(newLikes);
      localStorage.setItem("likes", JSON.stringify(newLikes));
    } else {
      // like and remove dislike if exists
      const newLikes = [...likes, movieId];
      const newDislikes = dislikes.filter((id) => id !== movieId);
      setLikes(newLikes);
      setDislikes(newDislikes);
      localStorage.setItem("likes", JSON.stringify(newLikes));
      localStorage.setItem("dislikes", JSON.stringify(newDislikes));
    }
  };

  const handleDislike = (movieId) => {
    if (dislikes.includes(movieId)) {
      // remove dislike
      const newDislikes = dislikes.filter((id) => id !== movieId);
      setDislikes(newDislikes);
      localStorage.setItem("dislikes", JSON.stringify(newDislikes));
    } else {
      // dislike and remove like if exists
      const newDislikes = [...dislikes, movieId];
      const newLikes = likes.filter((id) => id !== movieId);
      setDislikes(newDislikes);
      setLikes(newLikes);
      localStorage.setItem("dislikes", JSON.stringify(newDislikes));
      localStorage.setItem("likes", JSON.stringify(newLikes));
    }
  };

  return (
    <div style={{ maxWidth: "900px", margin: "auto", padding: "20px" }}>
      <h1>My Movies</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {moviesData.map((movie) => (
          <div
            key={movie.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
            }}
          >
            <img
              src={movie.poster}
              alt={movie.title}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <h3>{movie.title}</h3>
            <p style={{ fontSize: "14px", minHeight: "40px" }}>
              {movie.description}
            </p>
            <p>Rating: {movie.rating}</p>
            <div>
              <button
                onClick={() => handleLike(movie.id)}
                style={{
                  backgroundColor: likes.includes(movie.id) ? "green" : "gray",
                  color: "white",
                  marginRight: "10px",
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Like
              </button>
              <button
                onClick={() => handleDislike(movie.id)}
                style={{
                  backgroundColor: dislikes.includes(movie.id) ? "red" : "gray",
                  color: "white",
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Dislike
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
