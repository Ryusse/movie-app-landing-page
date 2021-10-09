import React from "react";
import { Link } from "react-router-dom";

const Moviecard = ({ movie }) => {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <Link className="card" to={"/movies/" + movie.id}>
      <img src={imageUrl} alt="movie image" className="card__img" />
      <p className="card__title">{movie.title}</p>
      <p className="card__date">{movie.release_date}</p>
    </Link>
  );
};

export default Moviecard;
