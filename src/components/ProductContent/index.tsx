import React from "react";
import getApiProduct from "../../assets/data";
import CardList from "../CardList";

const ProductContent = () => {
  const data = getApiProduct();
  return (
    <>
      {data.map(({ img, title, price, id }) => (
        <CardList key={id} id={id} price={price} title={title} img={img} />
      ))}
    </>
  );
};

export default ProductContent;
