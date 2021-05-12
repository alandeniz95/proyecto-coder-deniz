import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../../Context/Context";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = (props) => {
  const [count, setCount] = useState(0);
  const [products, productsCount, addProduct, delProduct, getGrandTotal] =
    useContext(CartContext);

  const giveCount = (i) => {
    setCount(i);
  };

  return (
    <div>
      <ItemCount
        func={giveCount}
        title={props.title}
        price={props.price}
        category={props.category}
      />
      <input
        onClick={() => addProduct(props.title, count)}
        type="button"
        value={`Agregar ${props.title} al carrito ${count}`}
      />
    </div>
  );
};