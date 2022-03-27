import React from "react";

const Detail = ({ id, name, price, image }: any) => {
  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt={name} title={name} />
      <h2>{price}</h2>
      <p>ID: {id}</p>
    </div>
  );
};

export default Detail;
