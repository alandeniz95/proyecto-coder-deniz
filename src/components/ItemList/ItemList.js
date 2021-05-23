import React, { useState, useEffect } from "react";
import { Item } from "../Item/Item";
import "./itemList.scss";
import { getFirestore } from "../firebase/firebase";

export const ItemList = () => {
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const items = db.collection("items").where("stock", ">=", 1); 
    items.get().then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItems(data);
      setProducts(false);
    });
  }, []);
  return (
    <div className="catalog">
      {products ? (
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
