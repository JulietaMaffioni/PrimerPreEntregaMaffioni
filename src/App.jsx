import './App.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
     <NavBar />
     <ItemListContainer greeting={'Productos'}/>
    </div>
  );
}

export default App;