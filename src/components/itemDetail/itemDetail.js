import {useState, useEffect} from "react"

export const ItemDetail = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch(
        "https://challenge-meli-backend.herokuapp.com/api/items?q=jardin"
      );
      const product = await res.json();
      console.log(product.items);
      setProduct(product.items);
    };
    getProducts();
  }, []);
  return (
    <div className="infoProduct">
      {
        product.map((product) => (product.id))
      }      
    </div>
  );
};