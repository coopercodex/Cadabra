import './App.css';
import { Header } from './Header';
import { Login } from './Login';
import { Home } from './Home ';
import { Route, Routes, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  return (
    <>
      <div className="App">
        {location.pathname === '/login' ? null : <Header />}
        <h1>Cadabra</h1>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' />
        </Routes>
      </div>
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
