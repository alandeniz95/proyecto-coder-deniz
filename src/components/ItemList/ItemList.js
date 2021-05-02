import { useEffect, useState } from "react";
import "./itemList.scss";
import { Items } from "../items/items";

export const ItemList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(
          "https://challenge-meli-backend.herokuapp.com/api/items?q=jardin"
        );
        const data = await res.json();
        setProducts(data.items);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, []);
  return (
    <div className="catalog">
      {products ? (
        products.map((product, index) => (
          <Items
            id={product.id}
            key={index}
            picture={product.picture}
            title={product.title}
            price={product.price}
            category={product.category}
          />
        ))
      ) : (
        <p>asdasdasdasdasd</p>
      )}
    </div>
  );
};
