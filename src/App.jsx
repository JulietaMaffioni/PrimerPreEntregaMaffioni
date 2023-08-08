import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ProductList from './components/ProductList/ProductList';

function App() {
  return (
    <div className="App">
     <NavBar />
     <ItemListContainer greeting={'Productos'}/>
     <ProductList/>
    </div>
  );
}

export default App;
