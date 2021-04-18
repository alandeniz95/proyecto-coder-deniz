import logo from '../../logo.jpg'
import { CartWidget } from './cartWidget';
import './navbar.scss';

export const Navbar = (props) => {
  const nameApp = 'Anthon Bakery'

  const CART = {
    quantity: 0,
  }

  return (
    <header className="navbar">
      <div className="logo-name">
        <img className="logo"src={logo} alt="Logo"/>
        <h3>{nameApp}</h3>
      </div>
      <nav>
        <ul>
          <li>{props.navigation[0]}</li>
          <li>{props.navigation[1]}</li>
          <li>{props.navigation[2]}</li>
          <li>{props.navigation[3]}</li>    
      </ul>
      </nav>
      <div className="cart">
        <CartWidget cart={CART}/>
      </div>
    </header>
  )
}