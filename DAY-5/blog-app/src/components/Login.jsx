import React, { useState } from "react";
import "../css/Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  let [loginUser, setLoginUser] = useState({
    username: "",
    password: "",
  });
  let inputChange = (event) => {
    let { name, value } = event.target;
    setLoginUser({ ...loginUser, [name]: value });
  };
  let makeLogin = (event) => {
    event.preventDefault();

    let usersList = localStorage.getItem("users");
    usersList = usersList ? JSON.parse(usersList) : [];

    if (usersList.length === 0) {
      alert("user not found, kindly create an account");
      return false;
    }

    let isUserExists = usersList.find(
      (user) =>
        loginUser.username === user.emailId &&
        loginUser.password === user.password
    );
    if (isUserExists) {
      alert("Login successfully");
      return false;
    } else {
      alert("Wrong username or password.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">
          <i className="fa fa-lock"></i> Login
        </h1>

        <p className="login-subtitle">
          Welcome back! Please login to your account
        </p>

        <form className="login-form" onSubmit={makeLogin}>
          {/* Email */}
          <div className="form-group">
            <label>
              <i className="fa fa-envelope"></i> Email Address
            </label>
            <input
              value={loginUser.username}
              name="username"
              onChange={inputChange}
              type="email"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label>
              <i className="fa fa-key"></i> Password
            </label>
            <input
              value={loginUser.password}
              name="password"
              onChange={inputChange}
              type="password"
              placeholder="Enter your password"
            />
          </div>

          {/* Button */}
          <button type="submit" className="btn-login">
            <i className="fa fa-sign-in"></i> Login
          </button>
        </form>

        {/* Footer */}
        <div className="login-footer">
          <p>
            Don’t have an account?
            <Link to="/create-account"> Create Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
