

import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./SignupForm.css"; // CSS file for styles

export default function SignupForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const storedUsers = JSON.parse(localStorage.getItem("userData")) || [];
    const newUser = { id: storedUsers.length + 1, ...data };
    const updatedUsers = [...storedUsers, newUser];
    localStorage.setItem("userData", JSON.stringify(updatedUsers));
    alert("Signup successful!");
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <h2 className="form-title">Create Account</h2>

      {/* Username */}
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          placeholder="Your username"
          {...register("username", { required: "Username is required" })}
        />
        {errors.username && (
          <p className="error-text">{errors.username.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format",
            },
          })}
        />
        {errors.email && (
          <p className="error-text">{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        {errors.password && (
          <p className="error-text">{errors.password.message}</p>
        )}
      </div>

      <button type="submit" className="submit-button">
        Sign Up
      </button>
    </form>
  );
}


