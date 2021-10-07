import React from "react";
import Button from "./Button";

const Moviecard = ({ movie }) => {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className="card">
      <img src={imageUrl} alt="movie image" className="card__img" />
      <p className="card__title">{movie.title}</p>
      <p className="card__date">{movie.release_date}</p>
      <Button className="button--light" content='Get tickets'/>
    </li>
  );
};

export default Moviecard;
