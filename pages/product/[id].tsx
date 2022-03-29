import React, { useState, useEffect } from "react";
// import { useRouter } from "next/router"; //Con este paquete podemos hacer uso del router de next
import fetch from "isomorphic-unfetch";
import { GetStaticPaths, GetStaticProps } from "next";
import Detail from "../../components/Detail/Detail";

//*Está es una página dinámica
//* build time - next js de antemano necesita saber cuales son las páginas que vamos a renderizar, pero para páginas dinámicas como esta necesitamos tener un método obligatorio de antemano

const url: string | undefined =
  process.env.NEXT_PUBLIC_API || "http://localhost:3000";

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${url}/api/avo`);
  const { data }: TAPIAvoResponse = await response.json();

  // const paths = productList.map(({ id }) => {
  //   // params: {
  //   //   id: avo.id;
  //   // }
  //   params: {
  //     id;
  //   }
  // });

  const paths = data.map(({ id }) => ({ params: { id } }));

  return {
    // paths: [
    //   // {params: {id: ...}},
    //   // {params: {id: ...}},
    // ]
    paths,
    //Incremental static generation
    //Cualquier página que no se especifique dentro de estos paths va a a dar un 404 en next js
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  //Estos métodos solo se pueden utilizar en los componentes que son páginas
  const response = await fetch(`${url}/api/avo/${id}`);
  // const { data: product }: { data: TProduct } = await response.json();
  const product: TProduct = await response.json();

  return {
    props: {
      product,
    },
  };
};

const ProductItem = ({ product }: { product: TProduct }) => {
  // const router = useRouter();
  // const {
  //   query: { productId },
  // } = useRouter();
  // const [product, setProduct] = useState<TProduct[]>([]);
  // useEffect(() => {
  //   if (productId !== undefined) {
  //     window
  //       .fetch(`/api/avo/${productId}`)
  //       .then((response) => response.json())
  //       // .then((data) => console.log(data)); //Investigar. Las funciones son una clase principal en js así que el console.log lo podemos utilizar de esta manera y consologuear sin pasarle ningun parámetro o funcioón anónima al then
  //       .then((data) => {
  //         console.log(data);
  //         setProduct([data]);
  //       });
  //   }
  // }, [productId]);
  return (
    <div>
      {/* {!product.length ? (
        <h2>Loading...</h2>
      ) : ( */}
      <div>
        <Detail product={product} />
      </div>
      {/* )} */}
    </div>
  );
};

export default ProductItem;
