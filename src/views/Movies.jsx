import React from "react";
import Hero from "../components/Hero";
import MoviesList from "../components/MoviesList";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

const Movies = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <Hero />
      <section className="section">
        <Search/>
        <h2>All Movies</h2>
        <MoviesList />
      </section>
    </React.Fragment>
  );
};

export default Movies;
