
import './App.css'
// src/App.jsx
// import React from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import SignupForm from "./components/Signup";
// import Login from "./components/Login";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/signup" element={<SignupForm />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/" element={<Navigate to="/login" />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

















// import React, { useState, useEffect } from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import SignupForm from "./components/Signup";
// import Login from "./components/Login";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Likes from "./pages/Likes";
// import Dislikes from "./pages/Dislikes";
// import MyMovies from "./pages/MyMovies";

// export default function App() {
//   // State to track logged-in user name
//   const [loggedInUser, setLoggedInUser] = useState(null);

//   // On mount, read from localStorage
//   useEffect(() => {
//     const user = localStorage.getItem("loggedInUser");
//     if (user) setLoggedInUser(user);
//   }, []);

//   // Function to call after login success
//   const handleLogin = (username) => {
//     localStorage.setItem("loggedInUser", username);
//     setLoggedInUser(username);
//   };

//   // Function to logout
//   const handleLogout = () => {
//     localStorage.removeItem("loggedInUser");
//     setLoggedInUser(null);
//   };

//   return (
//     <BrowserRouter>
//       {loggedInUser && <Navbar onLogout={handleLogout} />}

//       <Routes>
//         <Route path="/signup" element={<SignupForm />} />
//         <Route
//           path="/login"
//           element={
//             loggedInUser ? (
//               <Navigate to="/" />
//             ) : (
//               <Login onLogin={handleLogin} />
//             )
//           }
//         />

//         {loggedInUser ? (
//           <>
//             <Route path="/home" element={<Home />} />
//             <Route path="/likes" element={<Likes />} />
//             <Route path="/dislikes" element={<Dislikes />} />
//             <Route path="/mymovies" element={<MyMovies />} />
//           </>
//         ) : (
//           <Route path="*" element={<Navigate to="/login" />} />
//         )}
//       </Routes>
//     </BrowserRouter>
//   );
// }































// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import SignupForm from "./components/Signup";
import Login from "./components/Login";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Likes from "./pages/Likes";
import Dislikes from "./pages/Dislikes";
import MyMovies from "./pages/MyMovies";

export default function App() {
  const [loggedInUser, setLoggedInUser] = React.useState(
    localStorage.getItem("loggedInUser") || null
  );

  // This function is passed to Login to update loggedInUser state
  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route
          path="/signup"
          element={loggedInUser ? <Navigate to="/" /> : <SignupForm />}
        />
        <Route
          path="/login"
          element={
            loggedInUser ? (
              <Navigate to="/home" />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />

        {/* Protected routes */}
        {/* <Route
          path="/"
          element={
            loggedInUser ? <Layout /> : <Navigate to="/login" />
          }
        >
          <Route path="home" element={<Home />} />
          <Route path="likes" element={<Likes />} />
          <Route path="dislikes" element={<Dislikes />} />
          <Route path="mymovies" element={<MyMovies />} />
        </Route> */}


        <Route
  path="/"
  element={
    loggedInUser ? (
      <Layout onLogout={() => setLoggedInUser(null)} />
    ) : (
      <Navigate to="/login" />
    )
  }
>
  <Route path="home" element={<Home />} />
  <Route path="likes" element={<Likes />} />
  <Route path="dislikes" element={<Dislikes />} />
  <Route path="mymovies" element={<MyMovies />} />
</Route>

      </Routes>
    </BrowserRouter>
  );
}






// // src/App.jsx
// import React from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import SignupForm from "./components/Signup";
// import Login from "./components/Login";
// import Home from "./pages/Home";
// import Likes from "./pages/Likes";
// import Dislikes from "./pages/Dislikes";
// import MyMovies from "./pages/MyMovies";

// export default function App() {
//   // Check if user is logged in (by stored username)
//   const loggedInUser = localStorage.getItem("loggedInUser");

//   return (
//     <BrowserRouter>
//       {/* Navbar shown only if logged in */}
//       {loggedInUser && <Navbar />}

//       <Routes>
//         {/* Public routes */}
//         <Route path="/signup" element={<SignupForm />} />
//         <Route path="/login" element={<Login />} />

//         {/* Protected routes */}
//         {loggedInUser ? (
//           <>
//             <Route path="/home" element={<Home />} />
//             <Route path="/likes" element={<Likes />} />
//             <Route path="/dislikes" element={<Dislikes />} />
//             <Route path="/mymovies" element={<MyMovies />} />
//             {/* Redirect any unknown paths to /home */}
//             <Route path="*" element={<Navigate to="/home" />} />
//           </>
//         ) : (
//           // If not logged in, redirect all other routes to login
//           <Route path="*" element={<Navigate to="/login" />} />
//         )}
//       </Routes>
//     </BrowserRouter>
//   );
// }



// import React from "react";
// import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import SignupForm from "./components/Signup";
// import Login from "./components/Login";

// import Home from "./pages/Home";
// import Likes from "./pages/Likes";
// import Dislikes from "./pages/Dislikes";
// import MyMovies from "./pages/MyMovies";

// // Wrapper component to conditionally show Navbar based on route & login
// function LayoutWithNavbar({ children }) {
//   const location = useLocation();
//   const loggedInUser = localStorage.getItem("loggedInUser");

//   // Paths where Navbar should NOT show
//   const noNavbarPaths = ["/login", "/signup"];

//   // Show Navbar only if user logged in AND current path is NOT in noNavbarPaths
//   const showNavbar = loggedInUser && !noNavbarPaths.includes(location.pathname);

//   return (
//     <>
//       {showNavbar && <Navbar />}
//       {children}
//     </>
//   );
// }

// // export default function App() {
// //   const loggedInUser = localStorage.getItem("loggedInUser");

// //   return (
// //     <BrowserRouter>
// //       <Routes>
// //         {/* Public routes: Login & Signup without Navbar */}
// //         <Route path="/login" element={!loggedInUser ? <Login /> : <Navigate to="/home" />} />
// //         <Route path="/signup" element={!loggedInUser ? <SignupForm /> : <Navigate to="/home" />} />

// //         {/* Protected routes: wrap with LayoutWithNavbar */}
// //         <Route
// //           path="/home"
// //           element={
// //             <LayoutWithNavbar>
// //               <Home />
// //             </LayoutWithNavbar>
// //           }
// //         />
// //         <Route
// //           path="/likes"
// //           element={
// //             <LayoutWithNavbar>
// //               <Likes />
// //             </LayoutWithNavbar>
// //           }
// //         />
// //         <Route
// //           path="/dislikes"
// //           element={
// //             <LayoutWithNavbar>
// //               <Dislikes />
// //             </LayoutWithNavbar>
// //           }
// //         />
// //         <Route
// //           path="/mymovies"
// //           element={
// //             <LayoutWithNavbar>
// //               <MyMovies />
// //             </LayoutWithNavbar>
// //           }
// //         />

// //         {/* Redirect unknown or root to login or home based on auth */}
// //         <Route path="/" element={loggedInUser ? <Navigate to="/home" /> : <Navigate to="/login" />} />
// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }

