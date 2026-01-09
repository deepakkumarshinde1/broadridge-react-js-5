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
        <NavLink to="/dashboard">
          <i className="fa fa-info-circle"></i> Dashboard
        </NavLink>
        <NavLink to="/my-blog">
          <i className="fa  fa-tags"></i> My Blogs
        </NavLink>
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

        <button
          className="btn-danger"
          onClick={() => navigate("/create-account")}
        >
          <span className="fa fa-sign-out"></span>
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
