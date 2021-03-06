import React from "react";
import Link from "next/link";
import { Card } from "semantic-ui-react";
import style from "./Card.module.css";

const CardItem = ({ id, name, image, price }: any) => {
  return (
    <div className={style.container} key={id}>
      <Link href="/product/[id]" as={`/product/${id}`}>
        <Card
          as="a"
          header={name}
          image={image}
          meta={<Card.Meta style={{ color: "#295739" }}>{price} USD</Card.Meta>}
        />
      </Link>
    </div>
  );
};

export default CardItem;
