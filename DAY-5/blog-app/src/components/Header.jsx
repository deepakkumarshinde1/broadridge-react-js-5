import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/auth.context";

function Header() {
  let navigate = useNavigate();
  let { authUser, logout } = useAuthContext();
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
        {authUser && (
          <>
            <NavLink to="/dashboard">
              <i className="fa fa-info-circle"></i> Dashboard
            </NavLink>
            <NavLink to="/my-blog">
              <i className="fa  fa-tags"></i> My Blogs
            </NavLink>
          </>
        )}
      </nav>

      <div className="auth">
        {authUser ? (
          <button className="btn-danger" onClick={logout}>
            <span className="fa fa-sign-out"></span>
            Logout
          </button>
        ) : (
          <>
            <button className="btn-outline" onClick={() => navigate("/login")}>
              Login
            </button>
            <button
              className="btn-primary"
              onClick={() => navigate("/create-account")}
            >
              Create Account
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
