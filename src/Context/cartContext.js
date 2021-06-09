import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  const addToCart = (item, quantity) => {
    const newCart = [...cart];
    const findItem = isInCart(item);

    if (findItem) {
      newCart[newCart.findIndex((prod) => prod.id === item.id)].quantity +=
        quantity;
      setCart(newCart);
      return;
    }
    item.quantity = quantity;
    newCart.push(item);
    setCart(newCart);
  };
  const isInCart = (item) => cart.find((product) => product.id === item.id);

  useEffect(() => {}, [cart]);

  const delProduct = (itemId) => {
    const newCart = cart.filter((item) => item.id !== itemId);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalCartPrice = () => {
    return cart.reduce((total, currentItem) => (total += currentItem.price * currentItem.quantity), 0)
  }

  useEffect(() => {
    setCartQuantity(cart.length);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        delProduct,
        cartQuantity,
        clearCart,
        setCart,
        totalCartPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
