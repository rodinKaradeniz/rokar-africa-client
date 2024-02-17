import React, { useEffect } from "react";
import ProductItem from "../components/ProductItem";
import { ProductList } from "../helpers/ProductList";
import "../styles/Products.css";

function Products() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="products">
      <div className="productsIntro">
        <h1>Our Products</h1>
        <h4>
          Each product is a testament to our commitment to quality,
          authenticity, and the art of elevating your culinary journey.
        </h4>
      </div>
      <div className="productList">
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

export default Products;
