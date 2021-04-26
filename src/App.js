import { Navbar } from "./components/navbar/navbar";
import { ItemListContainer } from "./components/listContainer/itemListContainer";
import { ItemCount } from "./components/itemCount/itemCount";

function App() {
  return (
    <div className="App">
      <Navbar />
      <hr />
      <ItemListContainer />
    </div>
  );
}

export default App;
