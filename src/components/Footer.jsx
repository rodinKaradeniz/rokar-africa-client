import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import "../styles/Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContent">
        <div className="footerSection">
          <img src={Logo} alt=""></img>
        </div>
        <div className="footerSection">
          <p>Chole Road, Gate No: 99</p>
          <p>Masaki, Dar Es Salaam</p>
          <p>Tanzania</p>
        </div>
        <div className="footerSection">
          <p>Phone: +255 752 777 708</p>
          <p>WhatsApp: +255 772 733 303</p>
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
