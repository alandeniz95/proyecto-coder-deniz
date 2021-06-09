import React, { useEffect, useState } from "react";
import "./styles/itemCount.scss";
import { ModalExample } from "../modals/modal";

export const ItemCount = ({ initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    if (count < 1) {
      setCount(1);
    } else {
      if (count > 10) {
        setCount(10);
      }
    }
  }, [count]);

  return (
    <div className="container-addItems">
      <div className="counter">
        <button className="btn-count" onClick={() => setCount(count - 1)}>
          -
        </button>
        <h5 className="count"> {count} </h5>
        <button className="btn-count" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
      <div className="addToCart">
        <button
          className="btn-success btn-addToCart"
          onClick={() => onAdd(count)}
        >
          <ModalExample />
        </button>
      </div>
    </div>
  );
};
