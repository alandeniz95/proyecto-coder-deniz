import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/Context";
import { CartWidget } from "./cartWidget";
import logo from "../../logo.jpg";
import "./navbar.scss";

export const NavBar = () => {
  const nameApp = "Anthon Bakery";
  const NAVIGATION = ["Home", "Galería", "Productos", "Contacto"];
  const [cart, productsCount, addProduct, delProduct, getGrandTotal] =
    useContext(CartContext);

  return (
    <header className="navbar">
      <Link to={"/"}>
        <div className="logo-name">
          <img className="logo" src={logo} alt="Logo" />
          <h3 className="title">{nameApp}</h3>
        </div>
      </Link>
      <nav className="navs">
        <ul className="links-list">
          <Link to={"/"}>
            <li className="links-link">{NAVIGATION[0]}</li>
          </Link>
          <Link to={"/"}>
            <li className="links-link">{NAVIGATION[1]}</li>
          </Link>
          <Link to={"/"}>
            <li className="links-link">{NAVIGATION[2]}</li>
          </Link>
          <Link to={"/"}>
            <li className="links-link">{NAVIGATION[3]}</li>
          </Link>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};
