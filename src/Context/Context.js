import React from "react";
import { useState } from "react";

export const CartContext = React.createContext([]);

export const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);

  
  const addProduct = (product, quantity, id, price) => {
    const newItem = [...cart];
    const newCart = cart.findIndex((item) => item.id === id);
    console.log(cart);
    if (newCart > 0) {
      newItem[newCart].quantity += quantity;
      setCart(newItem);
    } else {
      const newItemCart = {
        quantity: quantity,
        title: product,
        id: id, 
        price: price,
      };
      setCart([...cart, newItemCart]);
    }
  };

  const productsCount = () => {
    return cart.reduce((acc, product) => (acc += product.quantity), 0);
  };

  const delProduct = (id) => {
    const newCart = cart;
    newCart.splice(
      newCart.findIndex((prod) => prod.id === id),
      1
    );
    setCart([...newCart]);
  };

  const getGrandTotal = () => {
    const newCart = cart;
    return newCart.reduce(
      (acc, product) => (acc += product.price * product.quantity),
      0
    );
  };

  return (
    <CartContext.Provider
      value={[cart, productsCount, addProduct, delProduct]}
    >
      {props.children}
    </CartContext.Provider>
  );
};
