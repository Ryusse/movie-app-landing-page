import React from "react";
import Moviecard from "./MovieCard";
import { useState, useEffect } from "react";
import { get } from "../utils/httpClient";
import Spinner from "./Spinner";

const Movieslist = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    get("/discover/movie").then((data) => {
      setMovies(data.results);
      setIsLoading(false);
    });
  }, []);

  if(isLoading){
    return <Spinner/>
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
