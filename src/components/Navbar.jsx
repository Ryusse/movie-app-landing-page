import { useState } from "react";
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";
import Menu from "./Menu";
import Toggle from "./Toggle";
import Button from "./Button";
import Search from "./Search";
import SearchContainer from "./SearchContainer";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleToggleSearch = () => {
    setSearchOpen(!searchOpen);
  }

  return (
    <nav className="navbar">
      <div className="navbar__item" onClick={handleToggle}>
        <Toggle open={menuOpen} />
      </div>
      <Menu open={menuOpen} />

      <div className="navbar__item">
        <Link className="navbar__link" to="/">
          <div className="logo">LOGO</div>
        </Link>
      </div>

      <div className="navbar__item" onClick={handleToggleSearch}>
        <Search />
      </div>

      <SearchContainer open={searchOpen}/>

      <div className="navbar__item">
        <Button className="button--sign-up" content="Sign up" />
      </div>

    </nav>
  );
};

export default Navbar;
