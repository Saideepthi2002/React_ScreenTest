// import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import MovieCard from "../components/MovieCard";
// import movies from "../data/movies"; // You create this file with movie objects

// export default function Home() {
//   const [likes, setLikes] = useState([]);
//   const [dislikes, setDislikes] = useState([]);

//   const toggleLike = (id) => {
//     setDislikes((d) => d.filter((movieId) => movieId !== id));
//     setLikes((l) =>
//       l.includes(id) ? l.filter((movieId) => movieId !== id) : [...l, id]
//     );
//   };

//   const toggleDislike = (id) => {
//     setLikes((l) => l.filter((movieId) => movieId !== id));
//     setDislikes((d) =>
//       d.includes(id) ? d.filter((movieId) => movieId !== id) : [...d, id]
//     );
//   };

//   return (
//     <>
     
//       <div className="movie-grid">
//         {movies.map((movie) => (
//           <MovieCard
//             key={movie.id}
//             movie={movie}
//             liked={likes.includes(movie.id)}
//             disliked={dislikes.includes(movie.id)}
//             onLike={toggleLike}
//             onDislike={toggleDislike}
//           />
//         ))}
//       </div>
//     </>
//   );
// }




import React, { useState, useEffect } from "react";
import movies from "../data/movies"; // your movie data array

export default function Home() {
  const username = localStorage.getItem("loggedInUser");

  // Load liked and disliked movies ids from localStorage
  const [likedIds, setLikedIds] = useState(() => {
    const saved = localStorage.getItem(`likes_${username}`);
    return saved ? JSON.parse(saved) : [];
  });

  const [dislikedIds, setDislikedIds] = useState(() => {
    const saved = localStorage.getItem(`dislikes_${username}`);
    return saved ? JSON.parse(saved) : [];
  });

  // Save likes to localStorage
  useEffect(() => {
    localStorage.setItem(`likes_${username}`, JSON.stringify(likedIds));
  }, [likedIds, username]);

  // Save dislikes to localStorage
  useEffect(() => {
    localStorage.setItem(`dislikes_${username}`, JSON.stringify(dislikedIds));
  }, [dislikedIds, username]);

  const handleLike = (movieId) => {
    if (likedIds.includes(movieId)) {
      // If already liked, remove like
      setLikedIds(likedIds.filter((id) => id !== movieId));
    } else {
      // Add like and remove dislike if any
      setLikedIds([...likedIds, movieId]);
      setDislikedIds(dislikedIds.filter((id) => id !== movieId));
    }
  };

  const handleDislike = (movieId) => {
    if (dislikedIds.includes(movieId)) {
      // Remove dislike
      setDislikedIds(dislikedIds.filter((id) => id !== movieId));
    } else {
      // Add dislike and remove like if any
      setDislikedIds([...dislikedIds, movieId]);
      setLikedIds(likedIds.filter((id) => id !== movieId));
    }
  };

  return (
    <div style={{ paddingTop: "70px", paddingLeft: "20px", paddingRight: "20px" }}>
      <h1>Home</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "10px" }}>
            <img
              src={movie.poster}
              alt={movie.title}
              style={{ width: "100%", borderRadius: "6px" }}
            />
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <p>Rating: {movie.rating}</p>

            <div>
              <button
                style={{ color: likedIds.includes(movie.id) ? "green" : "gray" }}
                onClick={() => handleLike(movie.id)}
              >
                👍 Like
              </button>
              <button
                style={{ color: dislikedIds.includes(movie.id) ? "red" : "gray", marginLeft: "10px" }}
                onClick={() => handleDislike(movie.id)}
              >
                👎 Dislike
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
