import { useState } from "react";
import "../css/Login.css";
function Login() {
  let [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  let handleChange = (event) => {
    let { name, value } = event.target;
    let newLoginDetails = { ...loginDetails }; // create copy
    newLoginDetails[name] = value; // update object
    setLoginDetails(newLoginDetails); // update state
  };
  let makeLogin = (event) => {
    // avoid page refreshment
    event.preventDefault();

    console.log(loginDetails);

    setLoginDetails({
      username: "",
      password: "",
    }); // input reset
  };
  return (
    <div className="page">
      <div className="login-card">
        <div className="icon-box">→</div>

        <h2>Sign in with email</h2>
        <p className="subtitle">
          Make a new doc to bring your words, data,
          <br />
          and teams together. For free
        </p>

        <form onSubmit={makeLogin}>
          <div className="input-group">
            <span className="input-icon">✉</span>
            <input
              type="email"
              placeholder="Email"
              name="username"
              value={loginDetails.username}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <span className="input-icon">🔒</span>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={loginDetails.password}
              onChange={handleChange}
            />
            <span className="eye-icon">👁</span>
          </div>

          <div className="forgot">
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="btn-primary">
            Get Started
          </button>
        </form>

        <div className="divider">
          <span>Or sign in with</span>
        </div>

        <div className="social-login">
          <button type="button" className="social-btn google">
            G
          </button>
          <button type="button" className="social-btn facebook">
            f
          </button>
          <button type="button" className="social-btn apple">
            
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
