import { useEffect, useState } from "react";
import "./itemCount.scss";

export const ItemCount = () => {
  const [number, setNumber] = useState(1);
  const stock = 10;

  useEffect(() => {
    if (number >= stock) {
      setNumber(stock);
    } else {
      if (number <= 0) {
        setNumber(1);
      }
    }
  });

  return (
    <div className="formCart">
      <button className="btn" onClick={() => setNumber(number + 1)}>
        +
      </button>
      {number}
      <button className="btn" onClick={() => setNumber(number - 1)}>
        -
      </button>
    </div>
  );
};
