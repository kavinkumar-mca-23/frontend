import React from "react";
import { FaRegEdit } from "react-icons/fa";
import "./Homepage.css";

const HomePage = () => {
  return (
    <div>
      <nav className="navbar">

        <div className="logo">
          S P A N G L E 2
          <p>INFOTECH</p>
        </div>
    
        <ul className="nav-links">
          <li className="active">Home</li>
          <li>About us</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Our Products</li>
          <li>Blogs</li>
          <li>Gallery</li>
          <li>Career</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="hero">
        <h1>Brighten your business with our digital world</h1>
        <p>We are the prominent team to elevate your business to reach its zenith.</p>
      </div>

      
    </div>
  );
};

export default HomePage;
