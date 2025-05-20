// import React from "react";

// export default function Dislikes() {
//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Disliked Movies</h1>
//       <p>Here you can see the movies you disliked.</p>
//       {/* Add your disliked movies UI here */}
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import movies from "../data/movies";

export default function Dislikes() {
  const username = localStorage.getItem("loggedInUser");
  const [dislikedIds, setDislikedIds] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem(`dislikes_${username}`);
    setDislikedIds(saved ? JSON.parse(saved) : []);
  }, [username]);

  const dislikedMovies = movies.filter((m) => dislikedIds.includes(m.id));

  return (
    <div style={{ paddingTop: "70px", paddingLeft: "20px", paddingRight: "20px" }}>
      <h1>Disliked Movies</h1>
      {dislikedMovies.length === 0 && <p>You haven't disliked any movies yet.</p>}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {dislikedMovies.map((movie) => (
          <div key={movie.id} style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "10px" }}>
            <img
              src={movie.poster}
              alt={movie.title}
              style={{ width: "100%", borderRadius: "6px" }}
            />
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <p>Rating: {movie.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
