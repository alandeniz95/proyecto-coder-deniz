import React, { useState, useEffect } from "react";

export const ItemCount = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 0) {
      setCount(0);
    } else {
      if (count > 10) {
        setCount(10);
      }
    }
    props.func(count);
  }, [count]);

  return (
    <div>
      <h4>{props.title}</h4>
      <h4>Precio: {props.price}</h4>
      <h4>Categoria: {props.category}</h4>
      <input type="button" value="+" onClick={() => setCount(count + 1)} />
      {count}
      <input type="button" value="-" onClick={() => setCount(count - 1)} />
    </div>
  );
}
