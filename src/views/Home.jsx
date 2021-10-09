import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <React.Fragment>
      <Header
        title="Welcome to maini teather"
        content="Lorem ipsum dolor sit amet, consectetur adip"
      />
      <section className="section">
        <h3 className="section__h3">Featured</h3>
        <h2 className="section__h2">
          Now <span className="section__h2--light">Showing</span>
        </h2>
      </section>
    </React.Fragment>
  );
};

export default Home;
