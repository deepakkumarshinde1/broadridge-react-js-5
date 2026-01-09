import React from "react";
import "../css/Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register-page">
      <div className="register-card">
        <h1 className="register-title">
          <i className="fa fa-user-plus"></i> Create Account
        </h1>

        <p className="register-subtitle">
          Join us and start sharing your ideas
        </p>

        <form className="register-form">
          {/* Name */}
          <div className="form-group">
            <label>
              <i className="fa fa-user"></i> Full Name
            </label>
            <input type="text" placeholder="Enter your full name" />
          </div>

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
            <input type="password" placeholder="Create a password" />
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label>
              <i className="fa fa-lock"></i> Confirm Password
            </label>
            <input type="password" placeholder="Confirm your password" />
          </div>

          {/* Terms */}
          <div className="terms">
            <label>
              <input type="checkbox" />I agree to the{" "}
              <a href="#">Terms & Conditions</a>
            </label>
          </div>

          {/* Button */}
          <button type="submit" className="btn-register">
            <i className="fa fa-user-plus"></i> Create Account
          </button>
        </form>

        {/* Footer */}
        <div className="register-footer">
          <p>
            Already have an account?
            <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
