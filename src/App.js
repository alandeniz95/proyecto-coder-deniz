import { Navbar } from "./Components/NavBar/Navbar";
import { ItemListContainer } from "./Components/Item/ItemListContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ItemDetailContainer } from "./Components/Item/ItemDetailContainer";
import { Home } from "./Components/page/Home";
import { Cart } from "./Components/Cart/Cart";
import { CartProvider } from "./Context/cartContext";
import { notFoundPage } from "./Components/page/notFound";
import { Footer } from "./Components/page/Footer";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/galery" component={notFoundPage} />
          <Route path="/category/:products" component={ItemListContainer} />
          <Route path="/producto/:productId" component={ItemDetailContainer} />
          <Route path="/cart" component={Cart} />
        </Switch>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}
export default App;
