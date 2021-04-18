import './listProduct.scss'
export const Products = (props) =>{

  return(
    <div className="itemList">
      <img src={props.image}/>
      <h2>{props.title}</h2>
      <p className="description">{props.description}</p>
      <strong><p>${props.price}</p></strong>
    </div>
  )
}