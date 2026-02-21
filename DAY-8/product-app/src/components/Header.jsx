import React from "react";
import "../assets/css/Header.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { removeCookies } from "../config/authCookies";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  let { user } = useSelector((state) => state.userReducer);
  return (
    <header className="header">
      <div className="logo">
        <i className="fa fa-shopping-bag"></i>
        <span>MiniShop</span>
      </div>

      <nav className="nav-links">
        <NavLink to="/">
          <i className="fa fa-home"></i> Home
        </NavLink>
        <NavLink to="/products">
          <i className="fa fa-th-large"></i> Products
        </NavLink>
        <NavLink to="/cart">
          <i className="fa fa-shopping-cart"></i> Cart
        </NavLink>
      </nav>

      <div className="auth-links">
        <select onChange={changeLanguage} value={i18n.language}>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
        </select>
        {!user ? (
          <>
            <NavLink to="/login">
              <i className="fa fa-sign-in"></i> {t("login")}
            </NavLink>
            <NavLink to="/register">
              <i className="fa fa-user-plus"></i> Register
            </NavLink>
          </>
        ) : (
          <>
            <span>{t("welcome", { username: user.username })}</span>
            &nbsp;
            <button
              onClick={() => {
                removeCookies("accessToken");
                window.location.replace("/login");
              }}
            >
              {t("logout")}
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
