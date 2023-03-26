import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter as Router} from 'react-router-dom';
import { CartProvider, useCart } from "react-use-cart";

import ListArticleCard from './Components/Articles/ListArticleCard';
import Navbarre from'./Components/Navbarre.js'
import ListRoutes from './Routes/ListRoutes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <CartProvider>
      <Router>
      <Navbarre/>
      <ListRoutes/>
      <ToastContainer/>
      </Router>
      </CartProvider>
    </div>
  );
}
export default App;