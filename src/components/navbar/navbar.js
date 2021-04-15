import logo from '../../logo.jpg'

export const Navbar = () => {
  return (
    <header>
      <nav>
        <img className="logoAnthon"src={logo} alt=""/>
        <h2>Anthon Bakery</h2>
        <ul>         
          <a href="#"><li>Home</li></a>
          <a href="#"><li>Galeria</li></a>
          <a href="#"><li>Productos</li></a>
          <a href="#"><li>Sobre Anthon</li></a>
          <a href="#"><li>Contacto</li></a>
      </ul>
      </nav>
    </header>
  )
}