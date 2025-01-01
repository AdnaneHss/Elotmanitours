import React from "react";
import './home.css';

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <div className="homeText">
          <h1>Plan Your Trip with Travel Dot</h1>
          <p>Travel to your favorite city with respect for the environment!</p>
          <button className="btn">
            <a href="#">Explore Now</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;