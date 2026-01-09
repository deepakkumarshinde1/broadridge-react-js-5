import React, { useState } from "react";
import "../css/Register.css";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Register = () => {
  let navigate = useNavigate();
  let [newUser, setNewUser] = useState({
    fullName: "",
    emailId: "",
    password: "",
    confirmPassword: "",
    iAgree: false,
  });

  let inputChange = (event) => {
    let { name, value } = event.target;
    if (name === "iAgree") {
      value = !newUser.iAgree;
    }
    setNewUser({ ...newUser, [name]: value });
  };

  let lengthValidation = (value, message) => {
    if (value.trim().length === 0) {
      alert(message);
      return true;
    }
    return false;
  };
  let saveUserForm = (event) => {
    event.preventDefault();

    if (lengthValidation(newUser.fullName, "Enter Full Name")) {
      return false;
    }
    if (lengthValidation(newUser.emailId, "Enter Email Id")) {
      return false;
    }
    if (lengthValidation(newUser.password, "Enter Password")) {
      return false;
    }
    if (lengthValidation(newUser.confirmPassword, "Enter Confirm Password")) {
      return false;
    }

    if (newUser.password !== newUser.confirmPassword) {
      alert("Password and Confirm Password dose not match");
      return false;
    }

    if (newUser.iAgree === false) {
      alert("Kindly accept the teams and condition");
      return false;
    }

    let usersList = localStorage.getItem("users");
    usersList = usersList ? JSON.parse(usersList) : [];

    let isUserExists = usersList.find(
      (user) => newUser.emailId === user.emailId
    );
    if (isUserExists) {
      alert("Email already registered, kindly user other");
      return false;
    }
    // convert array/object/jsonArray to string => JSON.stringify(value);
    // convert a string to array/object/jsonArray = JSON.parse(value)
    usersList.push({ ...newUser, id: uuidv4() });

    localStorage.setItem("users", JSON.stringify(usersList));
    alert("Registration completed successfully, please login in.");
    navigate("/login");
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h1 className="register-title">
          <i className="fa fa-user-plus"></i> Create Account
        </h1>

        <p className="register-subtitle">
          Join us and start sharing your ideas
        </p>

        <form className="register-form" onSubmit={saveUserForm}>
          {/* Name */}
          <div className="form-group">
            <label>
              <i className="fa fa-user"></i> Full Name
            </label>
            <input
              type="text"
              value={newUser.fullName}
              onChange={inputChange}
              name="fullName"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label>
              <i className="fa fa-envelope"></i> Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={newUser.emailId}
              onChange={inputChange}
              name="emailId"
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label>
              <i className="fa fa-key"></i> Password
            </label>
            <input
              type="password"
              placeholder="Create a password"
              value={newUser.password}
              onChange={inputChange}
              name="password"
            />
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label>
              <i className="fa fa-lock"></i> Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={newUser.confirmPassword}
              onChange={inputChange}
              name="confirmPassword"
            />
          </div>

          {/* Terms */}
          <div className="terms">
            <label>
              <input
                type="checkbox"
                checked={newUser.iAgree}
                name="iAgree"
                onChange={inputChange}
              />
              I agree to the <a href="#">Terms & Conditions</a>
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
