
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Shop from './Pages/Shop';
import Product from './Pages/Products';
import ProtectedPages from './Pages/ProtectedPages';
import Cart from './Pages/Cart';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <div className="App">
        <Routes>
          {/* Rutas Publicas */}
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp />}/>
          {/* Rutas Privadas */}
          <Route element={<ProtectedPages />}>
            <Route path='/' element={<Login/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/shop/:id' element={<Product/>} />
            <Route path='/cart' element={<Cart />}/>
            <Route path='/cart/success' element={<h1 style={{backgroundColor: "#ddd0ad", height: "900px"}}>Compra terminada!!!</h1>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;