// import React from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import "./Navbar.css";

// export default function Navbar() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("loggedInUser");
//     navigate("/login");
//   };

//   return (
//     <nav className="navbar">
//       <div className="nav-left">MyMovies</div>
//       <div className="nav-links">
//         <NavLink to="/home">Home</NavLink>
//         <NavLink to="/likes">Likes</NavLink>
//         <NavLink to="/dislikes">Dislikes</NavLink>
//         <button onClick={handleLogout}>Logout</button>
//       </div>
//     </nav>
//   );
// }



import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    onLogout();         // update app state to null
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-left">MyMovies</div>
      <div className="nav-links">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/likes">Likes</NavLink>
        <NavLink to="/dislikes">Dislikes</NavLink>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}



