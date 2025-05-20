// // src/components/Layout.jsx
// import React from "react";
// import Navbar from "./Navbar";
// import { Outlet } from "react-router-dom";

// export default function Layout() {
//   const handleLogout = () => {
//     localStorage.removeItem("loggedInUser");
//     // Reload page or navigate to login to reset state
//     window.location.href = "/login";
//   };

//   return (
//     <>
//       <Navbar onLogout={handleLogout} />
//       <main style={{ padding: "20px" }}>
//         <Outlet />
//       </main>
//     </>
//   );
// }



import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout({ onLogout }) {
  return (
    <>
      <Navbar onLogout={onLogout} />
      <main>
        <Outlet />
      </main>
    </>
  );
}
