import { useState } from "react";
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";
import Menu from "./Menu";
import Toggle from "./Toggle";
import Button from "./Button";
import Search from "./Search";
import SearchContainer from "./SearchContainer";

const Navbar = (props) => {
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

      <div className="navbar__item">
        <Search className="search-icon" onClick={handleToggleSearch}/>

        <Button className="button--sign-up" content="Sign up" />
      </div>
      <SearchContainer open={searchOpen}/>


    </nav>
  );
};

export default Navbar;
