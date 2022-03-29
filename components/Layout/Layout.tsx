import React from "react";
import Navbar from "@components/Navbar/Navbar";

const Layout: React.FC = ({ children }) => {
  //React.FC ----> React Function Component <--- es el tipo de componente que será
  return (
    <div className="container">
      <Navbar />
      {children}
      {/* <footer className="underline">Esto es un footer</footer>
      <style jsx>{`
        .underline {
          text-decoration: underline;
        }
      `}</style> */}
    </div>
  );
};

export default Layout;
