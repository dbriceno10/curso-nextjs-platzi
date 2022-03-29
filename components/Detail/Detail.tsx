import React from "react";
import style from "./Detail.module.css";

const Detail = ({ product }: any) => {
  return (
    <div>
      <h1 className={style.title}>{product.name}</h1>
      <img
        className={style.img}
        src={product.image}
        alt={product.name}
        title={product.name}
      />
      <h2 className={style.price}>{product.price} USD</h2>
      <div className={style.descriptionContainer}>
        <p>{product.attributes.description}</p>
      </div>
    </div>
  );
};

export default Detail;
