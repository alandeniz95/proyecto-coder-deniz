import {Navbar} from './components/navbar/navbar'
import {ItemListContainer} from './components/listContainer/itemListContainer'


function App() {
  const NAVIGATION = [
    'Home',
    'Galería',
    'Productos',
    'Contacto',
  ]
  
  return (
    <div className="App">
      <Navbar navigation={NAVIGATION}/>
      <hr/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
