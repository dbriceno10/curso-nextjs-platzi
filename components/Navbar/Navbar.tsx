import React from "react";
import Link from "next/link";
import { Avocado } from "../SVGIcons";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <a className={style.container}>
          <h3>Home</h3>
          <div>
            <Avocado size="58px" />
          </div>
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
