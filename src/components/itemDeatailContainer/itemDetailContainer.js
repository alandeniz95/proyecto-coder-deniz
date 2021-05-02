import { ItemDetail} from "../itemDetail/itemDetail"
export const ItemDetailContainer = (props) => {
  return (
    <div>
      <div className="">
        <h1>Producto</h1>
        <ItemDetail />
        <hr />
      </div>
    </div>
  );
};
