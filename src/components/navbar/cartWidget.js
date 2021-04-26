import { useState } from "react";
import cart from "./images/cart.svg";

export const CartWidget = () => {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="cart">
      <img className="cart-icon" src={cart} alt="" />
      <p className="cart-quantity">{quantity}</p>
    </div>
  );
};
