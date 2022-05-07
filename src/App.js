
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
        <Routes>
          {/* Rutas Publicas */}
          <Route path='/login' />
          <Route path='/signup'/>
          {/* Rutas Privadas */}
          <Route>
            <Route path='/' element={<Login/>}/>
            <Route path='/shop'/>
            <Route path='/shop/:id'/>
            <Route path='/cart'/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
