import React from "react";

function ProductItem({ image, name, description }) {
  return (
    <div className="productItem">
      <div className="productImageContainer">
        <img className="image" src={image} alt={"product"} />
      </div>
      <div className="productInfo">
        <h2> {name} </h2>
        <p> {description} </p>
      </div>
    </div>
  );
}

export default ProductItem;
