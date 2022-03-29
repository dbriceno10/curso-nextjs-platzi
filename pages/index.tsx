import React, { useState, useEffect } from "react";
import CardItem from "../components/Card/Card";
// import dotenv from "dotenv";
// dotenv.config();
// const urlAPI = process.env.NEXT_URL_API;
// import Loader from "../components/Loader/Loader";
// import axios, { AxiosResponse } from "axios";
import fetch from "isomorphic-unfetch";
import style from "./index.module.css";
const url: string | undefined =
  process.env.NEXT_PUBLIC_API || "http://localhost:3000";

// export const getServerSideProps = async () => {
//   const response = await fetch(`${url}/api/avo`);
//   const { data: productList }: TAPIAvoResponse = await response.json();

//   return {
//     props: {
//       // productList: data,
//       productList,
//     },
//   };
// };

export const getStaticProps = async () => {
  //Estos métodos solo se pueden utilizar en los componentes que son páginas
  const response = await fetch(`${url}/api/avo`);
  const { data: productList }: TAPIAvoResponse = await response.json();

  return {
    props: {
      productList,
    },
  };
};

const Home = ({ productList }: { productList: TProduct[] }) => {
  // const [productList, setProductList] = useState<TProduct[]>([]);
  // useEffect(() => {
  //   window
  //     .fetch("/api/avo")
  //     .then((response) => response.json())
  //     .then(({ data }: TAPIAvoResponse) => {
  //       setProductList(data);
  //     });
  // }, []);
  // useEffect(() => {
  //   //Siempre se ejecuta en el el navegador, es decir, Client Side Rendered.
  //   (async () => {
  //     const baseUrl: string = window.origin;
  //     const products: AxiosResponse = await axios.get(`${baseUrl}/api/avo`);
  //     setProductList(products.data.data);
  //   })();
  // }, []);
  return (
    <React.Fragment>
      <h1 className={style.title}>Avocados</h1>
      {/* {!productList.length ? (
        <h2>Loading...</h2>
      ) : ( */}
      <div>
        <div className={style.grid}>
          {productList?.map((product) => (
            <CardItem
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
      </div>
      {/* )} */}
    </React.Fragment>
  );
};

export default Home;

//Como esta es una página básica, sin decirle donde la va a renderizar, como esta se llama index.js, la va a renderizar como ruta inicial.
