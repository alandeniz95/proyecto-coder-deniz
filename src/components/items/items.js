import "./items.scss";
export const Items = (props) => {
  return (
    <div>
      <img src={props.products.picture}></img>
      <p>
        <strong>
          <i>
            <big>{props.products.title}</big>
          </i>
        </strong>
        <br />
        <strong>Condición</strong> "{props.products.condition}"
        <br /> <strong>Precio $ </strong>
        {props.products.price.amount}
      </p>
    </div>
  );
};
