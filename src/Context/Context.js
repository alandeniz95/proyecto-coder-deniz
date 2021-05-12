import React from "react";
import { useState } from "react";

export const CartContext = React.createContext([]);

export const CartContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  const addProduct = (product, quantity) => {
    setProducts([...products, { title: product, quantity: quantity }]);
  };

  const productsCount = () => {
    return products.reduce((acc, p) => (acc += p.quantity), 0);
  };

  const delProduct = (id) => {
    products.splice(
      products.findIndex((p) => p.id === id),
      1
    );
    setProducts([...products]);
  };

  const getGrandTotal = () => {
    return products.reduce((acc, p) => (acc += p.price * p.quantity), 0);
  };

  return (
    <CartContext.Provider
      value={[products, productsCount, addProduct, delProduct, getGrandTotal]}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
