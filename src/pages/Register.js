
import { useState } from "react";
import MyTitle from "../componants/MyTitle";

import { useSelector } from 'react-redux';

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    nameErr: "",
    emailErr: "",
    usernameErr: "",
    passwordErr: "",
    confirmPasswordErr: "",
  });

  // regex for validations
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;
  const usernameRegex = /^\S+$/; 
  const passwordRegex = /^.{8,}$/; 

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
  setForm({ ...form, [name]: value });

    

    // validation using if instead of switch
    if (name === "name") {
      if (value.length === 0) {
        setErrors({ ...errors, nameErr: "Name is required" });
      } else {
        setErrors({ ...errors, nameErr: "" });
      }
    }

    if (name === "email") {
      if (value.length === 0) {
        setErrors({ ...errors, emailErr: "Email is required" });
      } else if (!emailRegex.test(value)) {
        setErrors({ ...errors, emailErr: "Invalid email(must end with .com)" });
      } else {
        setErrors({ ...errors, emailErr: "" });
      }
    }

    if (name === "username") {
      if (value.length === 0) {
        setErrors({ ...errors, usernameErr: "Username is required" });
      } else if (!usernameRegex.test(value)) {
        setErrors({ ...errors, usernameErr: "Username must not contain spaces" });
      } else {
        setErrors({ ...errors, usernameErr: "" });
      }
    }

    if (name === "password") {
      if (value.length === 0) {
        setErrors({ ...errors, passwordErr: "Password is required" });
      } else if (!passwordRegex.test(value)) {
        setErrors({
          ...errors,
          passwordErr: "Password must be at least 8 characters",
        });
      } else {
        setErrors({ ...errors, passwordErr: "" });
      }
    }

    if (name === "confirmPassword") {
      if (value.length === 0) {
        setErrors({
          ...errors,
          confirmPasswordErr: "Confirm password is required",
        });
      } else if (value !== form.password) {
        setErrors({
          ...errors,
          confirmPasswordErr: "Passwords do not match",
        });
      } else {
        setErrors({ ...errors, confirmPasswordErr: "" });
      }
    }
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  /////////////////////////////////////////////////
// read data from store
  const myTheme = useSelector((state) => state.combineTheme.theme)

  return (
    <div className={`register d-flex justify-content-center align-items-center vh-100 {myTheme === "Light" ? "bg-light text-dark" : "bg-dark text-white"}`}>
  <div className="p-4 rounded border w-50 ">
    <MyTitle head="Register" />
    <form onSubmit={handleSubmit}>
      {/* Name */}
      <div className="mb-3 text-start">
        <label className="form-label">Name</label>
        <input
          type="text"
          className={`form-control ${errors.nameErr && "border-danger"}`}
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <p className="text-danger">{errors.nameErr}</p>
      </div>

      {/* Email */}
      <div className="mb-3 text-start">
        <label className="form-label">Email</label>
        <input
          type="email"
          className={`form-control ${errors.emailErr && "border-danger"}`}
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <p className="text-danger">{errors.emailErr}</p>
      </div>

      {/* Username */}
      <div className="mb-3 text-start">
        <label className="form-label">User Name</label>
        <input
          type="text"
          className={`form-control ${errors.usernameErr && "border-danger"}`}
          name="username"
          value={form.username}
          onChange={handleChange}
        />
        <p className="text-danger">{errors.usernameErr}</p>
      </div>

      {/* Password */}
      <div className="mb-3 text-start">
        <label className="form-label">Password</label>
        <input
          type="password"
          className={`form-control ${errors.passwordErr && "border-danger"}`}
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <p className="text-danger">{errors.passwordErr}</p>
      </div>

      {/* Confirm Password */}
      <div className="mb-3 text-start">
        <label className="form-label">Confirm Password</label>
        <input
          type="password"
          className={`form-control ${errors.confirmPasswordErr && "border-danger"}`}
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        <p className="text-danger">{errors.confirmPasswordErr}</p>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="btn btn-success w-100"
        disabled={
          errors.nameErr ||
          errors.emailErr ||
          errors.usernameErr ||
          errors.passwordErr ||
          errors.confirmPasswordErr
        }
      >
        Register
      </button>
    </form>
  </div>
</div>

  );
}

export default Register;
