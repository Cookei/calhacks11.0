import React from "react";
import logo from "../assets/what2eatlogo.png";
import { Link } from "wouter";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link
        to="/"
        style={{
          display: "flex",
          textDecoration: "none",
          color: "black",
          gap: "15px",
        }}
      >
        <img
          src={logo}
          style={{
            height: "60px",
            border: "solid 3px orange",
            borderRadius: "10px",
          }}
        />
        <h1>what2eat</h1>
      </Link>
    </div>
  );
};

export default Navbar;
