import { ItemDetail } from "../itemDetail/itemDetail";
import { useState, useEffect } from "react";
import "./itemDetailContainer.scss"

export const ItemDetailContainer = (props) => {
  const [item, setItem] = useState(false);
  const id = props.match.params.id;
  console.log(id);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await fetch(
          `https://5f3c95f36c11f80016d6f21e.mockapi.io/bitbuyer/items/${id}`
        );
        const data = await res.json();
        setItem(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    getProduct();
  }, []);
  return (
    <div className="infoProduct">
      {item ? (
        <ItemDetail
          id={item.id}
          title={item.nombre}
          price={item.precio}
          comment={item.comentarios}
        />
      ) : (
        <p>Cargando productos</p>
      )}
    </div>
  );
};
