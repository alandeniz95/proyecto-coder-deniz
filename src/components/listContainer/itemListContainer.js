import { ItemList } from "../ItemList/ItemList";
import "./itemListContainer.scss";

export const ItemListContainer = () => {
  return (
    <div className="container">
      <div>
        <p className="paragraph">
          Bienvenida/o a nuestra tienda online, sientete libre de disfrutar todos
          nuestros productos al mejor precio
        </p>
      </div>
      <div>
        <h1>Catalogo</h1>
        <ItemList className="card"/>
      </div>
    </div>
  );
};
