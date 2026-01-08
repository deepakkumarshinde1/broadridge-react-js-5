import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  let navigate = useNavigate();
  return (
    <header className="header">
      <div className="logo">
        <i className="fa fa-pencil-square-o"></i>
        <span>BlogSpace</span>
      </div>

      <nav className="nav">
        <NavLink to="/">
          <i className="fa fa-home"></i> Home
        </NavLink>
        {/* <a href="#">
          <i className="fa fa-tags"></i> Categories
        </a>
        <a href="#">
          <i className="fa fa-info-circle"></i> About
        </a> */}
      </nav>

      <div className="auth">
        <button className="btn-outline" onClick={() => navigate("/login")}>
          Login
        </button>
        <button
          className="btn-primary"
          onClick={() => navigate("/create-account")}
        >
          Create Account
        </button>
      </div>
    </header>
  );
}

export default Header;
