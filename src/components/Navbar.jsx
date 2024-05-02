import React from "react";
import Logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="leftSide">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <div className="navbarTitle">
          <Link to="/">Rokar Africa</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/products">Our Products</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};
