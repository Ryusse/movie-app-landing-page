import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { useQuery } from "../hooks/useQuery";
import ExitButton from "./ExitButton";
import Search from "./Search";

export default function SearchContainer(props) {
  const [searchText, setSearchText] = useState("");
  //Añadir elemento a la ruta
  const history = useHistory();
  const query = useQuery();
  const search = query.get("search");
  const closeSearch = false;

  useEffect(() => {
    setSearchText(search || "");
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("?search=" + searchText);
  };

  return (
      <form className={`search-container ${props.open ? "open" : ""}`} onSubmit={handleSubmit}>
        <div className="search-container__box">
          <input
            className="search-container__input"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Search className="search-container__search-button"/>
        </div>

        <ExitButton className="search-container__exit-button" />
      </form>
  );
}
