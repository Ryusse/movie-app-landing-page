import React from "react";
import { useQuery } from "../hooks/useQuery";
import Moviecard from "./MovieCard";
import { useState, useEffect } from "react";
import { get } from "../utils/httpClient";
import Spinner from "./Spinner";


const Movieslist = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search
      : "/discover/movie";
    get(searchUrl).then((data) => {
      setMovies(data.results);
      setIsLoading(false);
    });
  }, [search]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ul className="moviesList">
      {movies.map((movie) => (
        <Moviecard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default Movieslist;
