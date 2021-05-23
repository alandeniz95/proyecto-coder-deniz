import React from "react";
import { NavBar } from "./Components/NavBar/NavBar";
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./Components/ItemDeatailContainer/ItemDetailContainer";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./Context/Context";
import { Cart } from "./Components/Cart/Cart";
import "./Components/firebase/firebase";

export default function App() {
  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/" component={ItemListContainer} />
            <Route path="/itemdetail/:id" component={ItemDetailContainer} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}
