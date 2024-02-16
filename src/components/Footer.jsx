import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContent">
        <div className="footerSection1">
          <p>Icon</p>
          <p>Ro-Kar Africa</p>
        </div>
        <div className="footerSection2">
          <p>Address 1</p>
          <p>Address 2</p>
          <p>Address 3</p>
        </div>
        <div className="footerSection3">
          <p>Phone Number</p>
          <p>rokarafrica@gmail.com</p>
        </div>
        <div className="footerLinks">
          <Link to="/">Home</Link>
          <Link to="/products">Our Products</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="footerEnd">
        <p>Ro-Kar Africa &copy; 2019 All Rights Reserved.</p>
      </div>
    </div>
  );
};
