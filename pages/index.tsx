import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);
  useEffect(() => {
    window
      .fetch("/api/avo")
      .then((response) => response.json())
      // .then(console.log); //Investigar. Las funciones son una clase principal en js así que el console.log lo podemos utilizar de esta manera y consologuear sin pasarle ningun parámetro o funcioón anónima al then
      .then(({ data, length }) => setProductList(data));
  }, []);
  return (
    <div>
      <Navbar />
      <h1>Home</h1>
      <p>This is the home page</p>
      <div>
        {productList?.map((product) => {
          return (
            <div key={product.id}>
              <p>{product.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

//Como esta es una página básica, sin decirle donde la va a renderizar, como esta se llama index.js, la va a renderizar como ruta inicial.
