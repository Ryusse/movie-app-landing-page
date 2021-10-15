import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Search from "../components/Search";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <Hero
        title="Watch movie anytime, everywhere."
        content="Lorem ipsum dolor sit amet, consectetur adip"
      />
      <section className="section">
        <h3 className="section__h3">Featured</h3>
        <h2 className="section__h2">
          Now <span className="section__h2--light">Showing</span>
        </h2>
        <Search/>
      </section>
    </React.Fragment>
  );
};

export default Home;
