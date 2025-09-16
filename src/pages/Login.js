import { useState } from "react";
import MyTitle from "../componants/MyTitle";

import { useSelector } from 'react-redux';


function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    emailErr: "",
    passwordErr: "",
  });

  const handleForm = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

    if (name === "email") {
      value.length === 0
        ? setErrors({ ...errors, emailErr: "Email is required" })
        : value.length < 15
        ? setErrors({ ...errors, emailErr: "Email is invalid" })
        : setErrors({ ...errors, emailErr: "" });
    }

    if (name === "password") {
      value.length === 0
        ? setErrors({ ...errors, passwordErr: "Password is required" })
        : value.length < 8
        ? setErrors({ ...errors, passwordErr: "Password must be 8 characters at least" })
        : setErrors({ ...errors, passwordErr: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  /////////////////////////////////////////////////
// read data from store
  const myTheme = useSelector((state) => state.combineTheme.theme)

  return (
  <div className={` login d-flex justify-content-center align-items-center vh-100 {myTheme === "Light" ? "bg-light text-dark" : "bg-dark text-white"}`}>
  <div className="p-4 rounded border  w-50 ">
    <MyTitle head="Login" />
    <form onSubmit={handleSubmit}>
      {/* Email */}
      <div className="mb-3 text-start">
        <label className="form-label">Email</label>
        <input
          type="text"
          className={`form-control ${errors.emailErr && "border-danger"}`}
          name="email"
          value={form.email}
          onChange={handleForm}
        />
        <p className="text-danger">{errors.emailErr}</p>
      </div>

      {/* Password */}
      <div className="mb-3 text-start">
        <label className="form-label">Password</label>
        <input
          type="password"
          className={`form-control ${errors.passwordErr && "border-danger"}`}
          name="password"
          value={form.password}
          onChange={handleForm}
        />
        <p className="text-danger">{errors.passwordErr}</p>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="btn btn-success w-100"
        disabled={errors.emailErr || errors.passwordErr}
      >
        Login
      </button>
    </form>
  </div>
</div>


  );
}

export default Login;










// import React from   'react';
// function Login() {
//     return (
//         <div>
//             <h1 className='text-success mt-3'>Login Page</h1>

//             <form></form>
//             </div>
//     );
// }
// export default Login;