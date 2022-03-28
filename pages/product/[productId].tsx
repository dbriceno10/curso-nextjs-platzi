import React, { useState, useEffect } from "react";
import { useRouter } from "next/router"; //Con este paquete podemos hacer uso del router de next
import Detail from "../../components/Detail/Detail";

const ProductItem = () => {
  const router = useRouter();
  const {
    query: { productId },
  } = useRouter();
  const [product, setProduct] = useState<TProduct[]>([]);
  useEffect(() => {
    window
      .fetch(`/api/avo/${productId}`)
      .then((response) => response.json())
      // .then((data) => console.log(data)); //Investigar. Las funciones son una clase principal en js así que el console.log lo podemos utilizar de esta manera y consologuear sin pasarle ningun parámetro o funcioón anónima al then
      .then((data) => setProduct([data]));
  }, [productId]);
  return (
    <div>
      {!product.length ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <Detail
            name={product[0].name}
            image={product[0].image}
            id={product[0].id}
            price={product[0].price}
          />
        </div>
      )}
    </div>
  );
};

export default ProductItem;
