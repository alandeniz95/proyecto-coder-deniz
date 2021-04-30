import { useEffect, useState } from "react";
import "./itemList.scss"

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
          <p>
            
            <strong><i><big>{products.title}</big></i></strong>
            <br />
            <strong>Condición</strong> "{products.condition}" 
            <br /> <strong>Precio $ </strong>{products.price.amount}
          </p>
        ))
      )}
    </div>
  );
};
