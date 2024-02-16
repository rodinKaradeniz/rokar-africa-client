import React, { useEffect } from "react";
import ProductItem from "../components/ProductItem";
import { ProductList } from "../helpers/ProductList";
// import "../styles/ServicesAfrica.css";

function ServicesAfrica() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="servicesAfrica">
      <div className="servicesImage"></div>
      <div className="servicesIntro">
        <h1> Our Services </h1>
        <h4> Lorem ipsum, dolor sit amet consectetur adipisicing elit. </h4>
      </div>
      <div className="serviceList">
        {ProductList.map((serviceItem, key) => {
          return (
            <div className="productItemContainer">
              <ProductItem
                key={key}
                image={serviceItem.image}
                name={serviceItem.name}
                description={serviceItem.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServicesAfrica;
