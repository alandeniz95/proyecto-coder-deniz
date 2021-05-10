import { useEffect, useState } from "react";
import "./itemList.scss";
import { Items } from "../items/items";

export const ItemList = () => {
  const [products, setProducts] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(
          "https://5f3c95f36c11f80016d6f21e.mockapi.io/bitbuyer/items"
        );
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, []);
  return (
    <div className="catalog">
      {products ? (
        products.map((products, index) => (
          <Items
            id={products.id}
            key={index}
            title={products.nombre}
            price={products.precio}
            comment={products.comentario}
          />
        ))
      ) : (
        <p>Cargando productos</p>
      )}
    </div>
  );
};
