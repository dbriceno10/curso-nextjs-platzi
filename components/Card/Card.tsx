import React from "react";
import Link from "next/link";

const Card = ({ id, name, image, price, key }: any) => {
  return (
    <div>
      <Link href={`product/${id}`}>
        <a>
          <h2>{name}</h2>
          <img src={image} alt={name} title={name} />
          <p>
            Price: <strong>{price}</strong>
          </p>
        </a>
      </Link>
    </div>
  );
};

export default Card;
