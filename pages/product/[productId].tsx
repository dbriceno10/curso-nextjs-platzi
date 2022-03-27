import React, { useState, useEffect } from "react";
import { useRouter } from "next/router"; //Con este paquete podemos hacer uso del router de next
import Detail from "../../components/Detail/Detail";

const ProductItem = () => {
  const router = useRouter();
  const {
    query: { productId },
  } = useRouter();
  const [product, setProduct] = useState<any>({});
  useEffect(() => {
    console.log(productId);
    window
      .fetch(`/api/avo/${productId}`)
      .then((response) => response.json())
      // .then((data) => console.log(data)); //Investigar. Las funciones son una clase principal en js así que el console.log lo podemos utilizar de esta manera y consologuear sin pasarle ningun parámetro o funcioón anónima al then
      .then((data) => setProduct(data));
  }, [productId]);
  return (
    <div>
      {/* <h1>Product Item: {router.query.productId}</h1> */}
      <Detail
        name={product.name}
        image={product.image}
        id={product.id}
        price={product.price}
      />
    </div>
  );
};

export default ProductItem;
