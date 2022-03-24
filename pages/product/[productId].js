import React from "react";
import { useRouter } from "next/router"; //Con este paquete podemos hacer uso del router de next

const ProductItem = () => {
  // const router = useRouter();
  const {
    query: { productId },
  } = useRouter();
  return (
    <div>
      {/* <h1>Product Item: {router.query.productId}</h1> */}
      <h1>Product Item: {productId}</h1>
    </div>
  );
};

export default ProductItem;
