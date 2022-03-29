import React from "react";
import Link from "next/link";
import { Card } from "semantic-ui-react";

const CardItem = ({ id, name, image, price }: any) => {
  return (
    <div key={id}>
      <Link href="/product/[id]" as={`/product/${id}`}>
        <Card
          as="a"
          header={name}
          image={image}
          meta={<Card.Meta style={{ color: "#295739" }}>{price}</Card.Meta>}
        />
      </Link>
    </div>
  );
};

export default CardItem;
