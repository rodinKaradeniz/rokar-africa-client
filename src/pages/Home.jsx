import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Cashew from "../assets/cashew2.jpg";
import LongCayenne from "../assets/longcayenne2.jpg";
import RedDiamond from "../assets/reddiamond.jpg";
import Cloves from "../assets/cloves.jpg";
import "../styles/Home.css";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      <div className="headerContainer">
        <h1> Rokar Africa </h1>
        <h4>
          From fiery peppers to buttery cashews and aromatic cloves, our flavors
          are nuts about making your culinary journey extraordinary.
        </h4>
        <h4> Dar Es Salaam, Tanzania </h4>
      </div>
      <Link to="/products">
        <button> Our Products </button>
      </Link>
      <div className="collageContainer">
        <div class="collageBox">
          <img src={Cashew} alt="" />
          <span>Cashew</span>
        </div>
        <div class="collageBox">
          <img src={LongCayenne} alt="" />
          <span>Long Cayenne</span>
        </div>
        <div class="collageBox">
          <img src={RedDiamond} alt="" />
          <span>Red Diamond</span>
        </div>
        <div class="collageBox">
          <img src={Cloves} alt="" />
          <span>Cloves</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
