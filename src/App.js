import { Navbar } from "./components/navbar/navbar";
import { ItemListContainer } from "./components/listContainer/itemListContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <hr />
      <ItemListContainer />
      <hr />
    </div>
  );
}

export default App;
