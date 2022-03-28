import React, { useState, useEffect } from "react";
import Card from "../components/Card/Card";
import axios, { AxiosResponse } from "axios";

const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);
  useEffect(() => {
    // window
    //   .fetch("/api/avo")
    //   .then((response) => response.json())
    //   // .then(console.log); //Investigar. Las funciones son una clase principal en js así que el console.log lo podemos utilizar de esta manera y consologuear sin pasarle ningun parámetro o funcioón anónima al then
    //   .then(({ data, length }) => setProductList(data));
    (async () => {
      const baseUrl: string = window.origin;
      const products: AxiosResponse = await axios.get(`${baseUrl}/api/avo`);
      setProductList(products.data.data);
    })();
  }, []);
  return (
    <React.Fragment>
      {!productList.length ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <h1>Home</h1>
          <p>This is the home page</p>
          <div>
            {productList?.map((product) => (
              <Card
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
              />
            ))}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Home;

//Como esta es una página básica, sin decirle donde la va a renderizar, como esta se llama index.js, la va a renderizar como ruta inicial.
