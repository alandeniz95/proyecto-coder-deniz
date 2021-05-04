import { useEffect, useState } from "react";
import "./itemList.scss";
import { Items } from "../items/items";

export const ItemList = () => {
  const [products, setProducts] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(
          "https://challenge-meli-backend.herokuapp.com/api/items?q=jardin"
        );
        const data = await res.json();
        setProducts(data.items);
        console.log(data.items);
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
            picture={products.picture}
            title={products.title}
            price={products.price}
            condition={products.condition}
          />
        ))
      ) : (
        <p>Cargando productos</p>
      )}
    </div>
  );
};
