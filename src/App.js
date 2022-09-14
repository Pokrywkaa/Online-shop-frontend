import Products from "./components/Products";
import Sidebar from "./components/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


const App = () => {
  return(
    <div className="App">
        <Products/>
        <Sidebar/>
    </div>
  )
}

export default App;
