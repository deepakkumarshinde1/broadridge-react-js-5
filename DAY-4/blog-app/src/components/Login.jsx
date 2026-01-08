import React from "react";
import "../css/Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">
          <i className="fa fa-lock"></i> Login
        </h1>

        <p className="login-subtitle">
          Welcome back! Please login to your account
        </p>

        <form className="login-form">
          {/* Email */}
          <div className="form-group">
            <label>
              <i className="fa fa-envelope"></i> Email Address
            </label>
            <input type="email" placeholder="you@example.com" />
          </div>

          {/* Password */}
          <div className="form-group">
            <label>
              <i className="fa fa-key"></i> Password
            </label>
            <input type="password" placeholder="Enter your password" />
          </div>

          {/* Options */}
          <div className="login-options">
            <label className="remember">
              <input type="checkbox" /> Remember me
            </label>

            <a href="#" className="forgot">
              Forgot password?
            </a>
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
