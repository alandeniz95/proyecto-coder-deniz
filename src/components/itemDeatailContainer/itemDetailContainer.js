import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import "./itemDetailContainer.scss"

export const ItemDetailContainer = (props) => {
  const [item, setItem] = useState(false);
  const id = props.match.params.id;
  
  const handleClick = () =>{
    
  }

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await fetch(
          `https://5f3c95f36c11f80016d6f21e.mockapi.io/bitbuyer/items/${id}`
        );
        const data = await res.json();
        setItem(data);
      } catch (error) {
        console.error(error);
      }
    };
    getProduct();
  }, [id]);
  return (
    <div className="infoProduct">
      {item ? (
        <ItemDetail
        title={item.nombre}
        price={item.precio}
        category={item.categoria}
        id={item.id}
      />
      ) : (
        <p>Cargando productos</p>
      )}
    </div>
  );
};
