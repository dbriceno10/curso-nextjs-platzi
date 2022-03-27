import React from "react";
import Navbar from "@components/Navbar/Navbar";

const Layout: React.FC = ({ children }) => {
  //React.FC ----> React Function Component <--- es el tipo de componente que será
  return (
    <div>
      <Navbar />
      {children}
      <footer>Esto es un footer</footer>
    </div>
  );
};

export default Layout;
