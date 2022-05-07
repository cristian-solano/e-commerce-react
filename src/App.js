
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Routes>
          {/* Rutas Publicas */}
          <Route path='/login'/>
          <Route path='/signup'/>
          {/* Rutas Privadas */}
          <Route>
            <Route path='/'/>
            <Route path='/shop'/>
            <Route path='/shop/:id'/>
            <Route path='/cart'/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
