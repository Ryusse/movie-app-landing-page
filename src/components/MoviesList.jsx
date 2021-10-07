import React from "react";
import movies from "../assets/data/movies.json";
import Moviecard from "./MovieCard";

const Movieslist = () => {
  console.log(movies);
  return (
    <ul className="list">
      {movies.map((movie) => (
        <Moviecard key={movie.id} movie={movie}/>
      ))}
    </ul>
  );
};

export default Movieslist;
