import './App.css';
import { Header } from './components/Header';
import { Login } from './components/Login';
import { Home } from './components/Home ';
import { Checkout } from './components/Checkout';
import { Route, Routes, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  return (
    <>
      <div className="App">
        {location.pathname === '/login' ? null : <Header />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </div>
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
