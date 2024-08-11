import React from "react";
import { Link } from "react-router-dom";
import { FaGift } from "react-icons/fa"; 
import "../styles/Home.scss"; 

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1 className="home-title">Welcome to Gift Card Maker</h1>
      <div className="home-content">
        <FaGift className="home-icon" />
        <p className="home-description">
          Create personalized gift cards for any occasion quickly and easily.
        </p>
        <Link to="/edit" className="home-link">
          Create Your Gift Card
        </Link>
      </div>
    </div>
  );
};

export default Home;
