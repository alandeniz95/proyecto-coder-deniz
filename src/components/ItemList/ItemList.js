import React, { useState, useEffect } from "react";
import { Item } from "../Item/Item";
import "./itemList.scss"

export const  ItemList = (props) => {
  const [items, setItems] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(
          "https://5f3c95f36c11f80016d6f21e.mockapi.io/bitbuyer/items"
        );
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, []);
  return (
    <div className="catalog">
      {items ? (
        items.map((product, index) => (
          <Item
            id={product.id}
            key={index}
            title={product.nombre}
            price={product.precio}
            category={product.categoria}
          />
        ))
      ) : (
        <p>Trayendo información desde base de datos...</p>
      )}
    </div>
  );
}


