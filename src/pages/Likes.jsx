// import React from "react";

// export default function Likes() {
//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Liked Movies</h1>
//       <p>Here you can see the movies you liked.</p>
//       {/* Add your liked movies UI here */}
//     </div>
//   );
// }


// // src/pages/Likes.jsx
// import React from "react";
// import movies from "../data/movies"; // your movie data

// export default function Likes() {
//   // Get liked movie IDs from localStorage
//   const likedIds = JSON.parse(localStorage.getItem("likes")) || [];

//   // Filter movies that are liked
//   const likedMovies = movies.filter((m) => likedIds.includes(m.id));

//   if (likedMovies.length === 0)
//     return <p style={{ textAlign: "center", marginTop: "2rem" }}>No liked movies yet.</p>;

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>Liked Movies</h2>
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))",
//           gap: "20px",
//         }}
//       >
//         {likedMovies.map(({ id, title, image, description, rating }) => (
//           <div
//             key={id}
//             style={{
//               border: "1px solid #ddd",
//               borderRadius: "8px",
//               overflow: "hidden",
//               boxShadow: "0 2px 6px rgb(0 0 0 / 0.1)",
//               backgroundColor: "white",
//             }}
//           >
//             <img
//               src={image}
//               alt={title}
//               style={{ width: "100%", height: "300px", objectFit: "cover" }}
//             />
//             <div style={{ padding: "10px" }}>
//               <h3 style={{ margin: "0 0 8px 0" }}>{title}</h3>
//               <p
//                 style={{
//                   fontSize: "14px",
//                   color: "#555",
//                   height: "50px",
//                   overflow: "hidden",
//                   textOverflow: "ellipsis",
//                 }}
//               >
//                 {description}
//               </p>
//               <p style={{ fontWeight: "600" }}>Rating: {rating}/10</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

















import React, { useState, useEffect } from "react";
import movies from "../data/movies";

export default function Likes() {
  const username = localStorage.getItem("loggedInUser");
  const [likedIds, setLikedIds] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem(`likes_${username}`);
    setLikedIds(saved ? JSON.parse(saved) : []);
  }, [username]);

  const likedMovies = movies.filter((m) => likedIds.includes(m.id));

  return (
    <div style={{ paddingTop: "70px", paddingLeft: "20px", paddingRight: "20px" }}>
      <h1>Liked Movies</h1>
      {likedMovies.length === 0 && <p>You haven't liked any movies yet.</p>}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {likedMovies.map((movie) => (
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
