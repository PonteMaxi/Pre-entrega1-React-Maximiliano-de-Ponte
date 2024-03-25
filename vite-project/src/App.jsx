import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/NavBar/Navbar'

function App() {

  return(
    <div>
      <Navbar />
      <ItemListContainer title='Tienda ' />
    </div>);
}

export default App
