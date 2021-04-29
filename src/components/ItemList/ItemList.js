import { useState } from "react";
import { Items } from "../items/items"

export const ItemList = () => {
  const [products, setProducts] = useState([]);


  const showProducts = async () => {
    const searchProduct = async (product) => {
      try {
        const res = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${product}`
        );
        const bodyRes = res.json();
        return bodyRes;
      } catch (error) {
        console.error(error);
      }
    };
    const myProduct = await searchProduct("gin");
    setProducts(myProduct.drinks);
  };
  showProducts();

  return (
    <div className="App">
      {products.length > 0 ? (
        products.map((product) =>
          products.map((product) => <Items product={product} />)
        )
      ) : (
        <p>Cargando productos...</p>
      )}
    </div>
  );
};
