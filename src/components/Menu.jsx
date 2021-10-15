import React from "react";
import { BrowserRouter as   Switch, Route ,Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu">
      <ul className="menu__list open">
        <li className="menu__item">
          <Link className="menu__link" to="/">
            Home
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" to="/movies">
            Movies
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" to="/series">
            Series
          </Link>
        </li>
        <li className="menu__item">
          My list <i className="fas fa-chevron-down"></i>
        </li>
      </ul>
    </div>
  );
}
