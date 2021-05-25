import React, { useEffect } from "react";
import { useState } from "react";
import {getFirestore} from "../Components/firebase/firebase"

export const CartContext = React.createContext([]);

export const CartContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState ([])

  const addProduct = (product, quantity) => {
    const newCart = products.findIndex((item) => item.title === product);
    if (newCart >= 0) {
      const newItem = products;
      newItem[newCart].quantity += quantity;
      setProducts(newItem);
    } else {
      const newItemCart = {
        title: product,
        quantity: quantity,
      };
      setProducts([...products, newItemCart]);
    }
  };

  const productsCount = () => {
    return products.reduce((acc, product) => (acc += product.quantity), 0);
  };

  const delProduct = (id) => {
    const newCart = products;
    newCart.splice(
      newCart.findIndex((prod) => prod.id === id),
      1
    );
    setProducts([...newCart]);
  };

  const getGrandTotal = () => {
    const newCart = products;
    return newCart.reduce(
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
