import React from "react";
import Header from "../components/Header";
import MoviesList from "../components/MoviesList";

const Movies = () => {
  return (
    <React.Fragment>
      <Header />
      <section className="section">
        <h2>All Movies</h2>
        <MoviesList />
      </section>
    </React.Fragment>
  );
};

export default Movies;
