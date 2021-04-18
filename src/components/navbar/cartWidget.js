import cart from './images/cart.svg'

export const CartWidget = (props) => {
  return (
      <div className="cart">
        <img className="cart-icon" src={cart} alt=""/>
        <p className="cart-quantity">{props.cart.quantity}</p>
      </div>
  )
}