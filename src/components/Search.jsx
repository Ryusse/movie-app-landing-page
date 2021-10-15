import { useState, useEffect} from "react";
import { useHistory } from "react-router";
import { useQuery } from "../hooks/useQuery";

export default function Search() {
  const [searchText, setSearchText] = useState("");
  //Añadir elemento a la ruta
  const history = useHistory();
  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    setSearchText(search || "");
  }, [search]);


  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("?search=" + searchText);
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <div className="search__container">
        <input
          className="search__input"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search__button" type="submit">
          Search
        </button>
      </div>
    </form>
  );
}
