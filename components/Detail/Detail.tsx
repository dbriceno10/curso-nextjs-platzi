import React from "react";

const Detail = ({ attributes, id, name, price, image }: any) => {
  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt={name} title={name} />
      {/* <p>{attributes.description}</p>
        <p>
          <p>{attributes.shape}</p>
          <p>{attributes.hardiness}</p>
          <p>{attributes.taste}</p>
        </p> */}
      <h2>{price}</h2>
      <p>ID: {id}</p>
    </div>
  );
};

export default Detail;
