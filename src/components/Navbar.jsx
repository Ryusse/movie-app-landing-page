import {useState} from "react";
import { BrowserRouter as   Switch, Route ,Link } from "react-router-dom";
import Menu from "./Menu";
import Toggle from "./Toggle";

const Navbar = () => {

  const [open , setOpen ] = useState(false);

  const handleToggle = () =>{
    setOpen(!open)
  }

  return (
    <nav className="navbar">

      <div className="navbar__item">
        <Link className="navbar__link" to="/">
          LOGO
        </Link>
      </div>

      <div className="navbar__item" onClick={handleToggle}>
        <Toggle open = {open}/>
      </div>

        {open && <Menu />}

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
      </ul>
    </nav>
  );
};

export default Navbar;
