import { useState } from "react";
import "./itemCount.scss";
export const ItemCount = () => {
  const [number, setNumber] = useState(1);
  const stock = 10;

  const onAdd = () => {
    setNumber(number + 1);
    if (number === stock) {
      setNumber(stock);
    }
  };

  const remove = () => {
    setNumber(number - 1);
    if (number <= 1) {
      setNumber(1);
    }
  };

  const addToCart = () => console.log("Agregando al carrito...");

  return (
    <div className="formCart">
      <button className="btn" onClick={onAdd}>+</button>
      <input type="text" value={number} />
      <button className="btn" onClick={remove}>-</button>
      <button className="addToCart"onClick={addToCart}>Add to cart</button>
    </div>
  );
};
