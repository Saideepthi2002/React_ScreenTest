// import React from "react";
// import { useForm } from "react-hook-form";
// import { Link, useNavigate } from "react-router-dom";
// import "./Login.css"


// export default function Login() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const navigate = useNavigate();

//   const onSubmit = (data) => {
//     // Check if user exists in localStorage
//     const storedUsers = JSON.parse(localStorage.getItem("userData")) || [];

//     const userExists = storedUsers.find(
//       (user) => user.email === data.email && user.password === data.password
//     );

//     if (userExists) {
//       alert("Login successful!");
//       // Redirect to a dashboard or homepage after login
//       // For demo, we just navigate to "/"
//       navigate("/");
//     } else {
//       alert("Invalid email or password");
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="max-w-md mx-auto mt-12 p-8 bg-white rounded-lg shadow-lg space-y-6"
//     >
//       <h2 className="text-3xl font-semibold text-gray-800 text-left mb-6">
//         Login
//       </h2>

//       {/* Email */}
//       <div className="space-y-1">
//         <label className="block text-sm font-medium text-gray-700 text-left">
//           Email
//         </label>
//         <input
//           {...register("email", {
//             required: "Email is required",
//             pattern: {
//               value: /^\S+@\S+$/i,
//               message: "Invalid email format",
//             },
//           })}
//           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
//           placeholder="example@mail.com"
//         />
//         {errors.email && (
//           <p className="text-red-600 text-sm">{errors.email.message}</p>
//         )}
//       </div>

//       {/* Password */}
//       <div className="space-y-1">
//         <label className="block text-sm font-medium text-gray-700 text-left">
//           Password
//         </label>
//         <input
//           type="password"
//           {...register("password", {
//             required: "Password is required",
//             minLength: {
//               value: 6,
//               message: "Minimum 6 characters",
//             },
//           })}
//           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
//           placeholder="Enter your password"
//         />
//         {errors.password && (
//           <p className="text-red-600 text-sm">{errors.password.message}</p>
//         )}

//         {/* Signup link */}
//         <p className="text-sm mt-2">
//           Don't have an account?{" "}
//           <Link
//             to="/signup"
//             className="text-blue-600 hover:underline"
//           >
//             Sign Up
//           </Link>
//         </p>
//       </div>

//       <button
//         type="submit"
//         className="w-full mt-4 py-2 px-4 bg-green-600 text-white rounded-md text-lg font-medium hover:bg-green-700 transition duration-300"
//       >
//         Login
//       </button>
//     </form>
//   );
// }




import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login({ onLogin }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

//   const onSubmit = (data) => {
//     const storedUsers = JSON.parse(localStorage.getItem("userData")) || [];

//     const userExists = storedUsers.find(
//       (user) => user.email === data.email && user.password === data.password
//     );

//     if (userExists) {
//           localStorage.setItem("loggedInUser", JSON.stringify(userExists.username));
//       alert("Login successful!");
//       navigate("/");
//     } else {
//       alert("Invalid email or password");
//     }
//   };

// const onSubmit = (data) => {
//     const storedUsers = JSON.parse(localStorage.getItem("userData")) || [];
//     const userExists = storedUsers.find(
//       (user) => user.email === data.email && user.password === data.password
//     );

//     if (userExists) {
//       alert("Login successful!");
//       onLogin(userExists.username);  // pass username up
//       navigate("/");  // navigate to home
//     } else {
//       alert("Invalid email or password");
//     }
//   };



// inside your Login component's onSubmit handler:
const onSubmit = (data) => {
  const storedUsers = JSON.parse(localStorage.getItem("userData")) || [];
  const userExists = storedUsers.find(
    (user) => user.email === data.email && user.password === data.password
  );

  if (userExists) {
    alert("Login successful!");
    localStorage.setItem("loggedInUser", userExists.username);
    onLogin(userExists.username);  // <-- Important to update App state
    navigate("/"); // redirect to home
  } else {
    alert("Invalid email or password");
  }
};

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-form">
      <h2 className="title">Login</h2>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="example@mail.com"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format",
            },
          })}
        />
        {errors.email && <p className="error-msg">{errors.email.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Minimum 6 characters",
            },
          })}
        />
        {errors.password && <p className="error-msg">{errors.password.message}</p>}

        <p className="signup-text">
          Don't have an account?{" "}
          <Link to="/signup" className="signup-link">
            Sign Up
          </Link>
        </p>
      </div>

      <button type="submit" className="btn-submit">
        Login
      </button>
    </form>
  );
}
