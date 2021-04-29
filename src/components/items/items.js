import { useState } from "react";

export const Item = () => {
  const [products, setProducts] = useState([]);

  const hanldeClick = async () => {
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
    const myProduct = await searchProduct("Vodka");
    setProducts(myProduct.drinks);
  };

  return (
    <div className="App">
      <button onClick={hanldeClick}>Click Here</button>
      {products.length > 1 ? (
        products.map((product) => <p>{product.strDrink}</p>)
      ) : (
        <p>No hay tragos aun</p>
      )}
    </div>
  );
};


