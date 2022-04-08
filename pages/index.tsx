import React, { useState, useEffect } from "react";
import CardItem from "../components/Card/Card";
import axios, { AxiosResponse } from "axios";
import style from "./index.module.css";

const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([]);
  useEffect(() => {
    (async () => {
      const baseUrl: string = window.origin;
      const products: AxiosResponse = await axios.get(`${baseUrl}/api/avo`);
      setProductList(products.data.data);
    })();
  }, []);
  return (
    <React.Fragment>
      <h1 className={style.title}>Avocados</h1>
      {!productList.length ? (
        <h2>Loading...</h2>
      ) : (
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
      )}
    </React.Fragment>
  );
};

export default Home;
