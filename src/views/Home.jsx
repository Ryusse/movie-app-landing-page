import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {

  return (
    <React.Fragment>
      <Navbar />
      <Hero/>
      <main className="content">
        <h2 className="content__h2">
          TRENDS NOW
        </h2>
      </main>
    </React.Fragment>
  );
};

export default Home;
