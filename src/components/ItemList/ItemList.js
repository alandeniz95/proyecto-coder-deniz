import { useEffect, useState } from "react";
import "./itemList.scss";
import { Items } from "../items/items"

export const ItemList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch(
        "https://challenge-meli-backend.herokuapp.com/api/items?q=jardin"
      );
      const products = await res.json();
      console.log(products.items);
      setProducts(products.items);
    };
    getProducts();
  }, []);
  return (
    <div className="catalog">
      {products.length < 1 ? (
        <p className="loadProduct">Cargando productos...</p>
      ) : (
        products.map((products) => (
          <Items products = {products} />
        ))
      )}
    </div>
  );
};
