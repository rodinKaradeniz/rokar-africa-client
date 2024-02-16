import React, { useState } from "react";
import Logo from "../assets/dummyLogo.jpg";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";

export const Navbar = () => {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <div className="navbarTitle">
          <Link to="/">Ro-Kar Africa</Link>
        </div>
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/products">Our Products</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/products">Our Products</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
};
