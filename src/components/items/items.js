import "./items.scss"
export const Items = (props) => {

  return (
    <div className="itemList">
      <img src={props.product.strDrinkThumb} />
      <p>{props.product.strDrink}</p>
    </div>
  );
};
