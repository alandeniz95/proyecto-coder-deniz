import React from "react";
import { useState } from "react";

export const CartContext = React.createContext([]);

export const CartContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  const addProduct = (product, quantity) => {
    if (products.length >= 1) {
      products[products.findIndex((prod) => prod.id === product.id)].quantity +=
        quantity;
      setProducts(products);
      return;
    }
    setProducts([...products, { title: product, quantity: quantity }]);
  };

  const productsCount = () => {
    return products.reduce((acc, product) => (acc += product.quantity), 0);
  };

  const delProduct = (id) => {
    products.splice(
      products.findIndex((prod) => prod.id === id),
      1
    );
    setProducts([...products]);
  };

  const getGrandTotal = () => {
    return products.reduce(
      (acc, product) => (acc += product.price * product.quantity),
      0
    );
  };

  return (
    <CartContext.Provider
      value={[products, productsCount, addProduct, delProduct, getGrandTotal]}
    >
      {props.children}
    </CartContext.Provider>
  );
};
