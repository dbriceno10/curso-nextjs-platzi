import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <menu>
        <Link href="/">
          <a style={{ margin: "5px" }}>Home</a>
        </Link>
        <Link href="/about">
          <a style={{ margin: "5px" }}>About</a>
        </Link>
      </menu>
    </nav>
  );
};

export default Navbar;
