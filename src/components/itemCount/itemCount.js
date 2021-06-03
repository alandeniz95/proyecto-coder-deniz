import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../../Context/Context";
import "./itemCount.scss";

export const ItemCount = (props) => {
  // const [cart, productsCount, addProduct, delProduct, getGrandTotal] = useContext(CartContext);
  const [cart, productsCount, addProduct, delProduct, getGranTotal] =
    useContext(CartContext);
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (count < 1) {
      setCount(1);
    } else {
      if (count > 10) {
        setCount(10);
      }
    }
    props.func(count);
  }, [count]);

  return (
    <div className="productInDetail">
      <img src={props.image} alt={props.title} />
      <div className="infoProduct">
        <h2>{props.title}</h2>
        <h3>Precio: {props.price}</h3>
        <p> {props.description}</p>
        <input
          className="btnSetCount"
          type="button"
          value="+"
          onClick={() => setCount(count + 1)}
        />
        <p className="count">{count}</p>
        <input
          className="btnSetCount"
          type="button"
          value="-"
          onClick={() => setCount(count - 1)}
        />
        <input
          className="btnAddProduct"
          onClick={() => addProduct(props.title, count, props.price, props.id)}
          type="button"
          value={`Agregar ${count} ${props.title} al carrito`}
        />
      </div>
    </div>
  );
};
