import React, { useState, useEffect } from "react";
import { Item } from "../Item/Item";
import "./itemList.scss";
import { getFirestore } from "../firebase/firebase";

export const ItemList = () => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const items = db.collection("items").where("stock", ">=", 1);
    items
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(data);
        setCart(false);
      })
      .catch((error) =>
      console.error(
        "Error al cargar los productos desde la base de datos" + error
        )
        );
      }, []);
      
  return (
    <div className="catalog">
      {cart ? (
        <p>Trayendo información desde base de datos...</p>
      ) : (
        items.map((product, index) => (
          <Item
            id={product.id}
            key={index}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))
      )}
    </div>
  );
};
