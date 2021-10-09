import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <li className="navbar__item">
        <Link className="navbar__link" to="/">
          LOGO
        </Link>
      </li>

      <ul className="navbar__list">
        <li className="navbar__item">
          <Link className="navbar__link" to="/">
            Home
          </Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" to="/movies">
            Movies
          </Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" to="/series">
            Series
          </Link>
        </li>
        <li className="navbar__item">
          My list <i className="fas fa-chevron-down"></i>
        </li>

        <li className="navbar__item">
          <i className="fas fa-search"></i>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
