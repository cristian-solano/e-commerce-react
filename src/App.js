
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Shop from './Pages/Shop';
import Product from './Pages/Products';
import ProtectedPages from './Pages/ProtectedPages';

function App() {
  return (
    <div className="App">
        <Routes>
          {/* Rutas Publicas */}
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup'/>
          {/* Rutas Privadas */}
          <Route element={<ProtectedPages />}>
            <Route path='/' />
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/shop/:id' element={<Product/>} />
            <Route path='/cart'/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;