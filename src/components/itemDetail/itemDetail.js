import React, { useState, useContext } from "react";
import { CartContext } from "../../Context/Context";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = (props) => {
  const [count, setCount] = useState(0);
  const [cart, productsCount, addProduct, delProduct, getGrandTotal] =
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
        image={props.image}
        description={props.description}
      />
      <input
        onClick={() => addProduct(props.title, count, props.price, props.id)}
        type="button"
        value={`Agregar ${count} ${props.title} al carrito`}
      />
    </div>
  );
};
