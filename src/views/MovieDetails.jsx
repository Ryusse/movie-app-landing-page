import React from "react";
import { useState, useEffect } from "react";
import { get } from "../utils/httpClient";
import { useParams } from "react-router";

import Header from "../components/Header";
import Spinner from "../components/Spinner";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    get("/movie/" + movieId).then((data) => {
      setIsLoading(false);
      setMovie(data);
    });
  }, [movieId]);

  if(isLoading){
    return <Spinner/>
  }
  if (!movie) {
    return null;
  }

  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
  return (
    <React.Fragment>
      <Header 
        title = {movie.title}
        content = {movie.overview} 
        image = {imageUrl} 
        genres = {movie.genres.map((genre) => genre.name).join(" , ")}
      />
    </React.Fragment>
  );
};

export default MovieDetails;
