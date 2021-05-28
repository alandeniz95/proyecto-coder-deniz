import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import basket from "./images/cart.svg";
import { CartContext } from "../../Context/Context";
import "./navbar.scss";

export const CartWidget = () => {
  const [quantity, setQuantity] = useState(0);
  const [cart, productsCount, addProduct, delProduct, getGrandTotal] =
    useContext(CartContext);

  return (
    <div className="cart">
      <Link to={"/cart"}>
        {productsCount()}
        <img className="cartIcon" src={basket} alt="basket" />
      </Link>
    </div>
  );
};
