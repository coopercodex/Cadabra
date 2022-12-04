import './App.css';
import { Header } from './Header';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Cadabra</h1>
      <Routes>
        <Route path='/' />
        <Route path='/checkout' />
        <Route path='/login' />
      </Routes>
    </div>
  );
}

export default App;
