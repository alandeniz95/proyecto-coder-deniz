import { Navbar } from "./components/navbar/navbar";
import { ItemListContainer } from "./components/itemListContainer/itemListContainer";
import { ItemDetailContainer } from "./components/itemDeatailContainer/itemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
      <Switch>
        <Route exact path="/" component={ItemListContainer} />
        <Route path="/itemdetail/:id" component={ItemDetailContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
