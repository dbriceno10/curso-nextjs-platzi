import React from "react";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Home</h1>
      <p>This is the home page</p>
    </div>
  );
};

export default Home;

//Como esta es una página básica, sin decirle donde la va a renderizar, como esta se llama index.js, la va a renderizar como ruta inicial.
