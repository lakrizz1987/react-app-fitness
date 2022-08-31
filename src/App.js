import { Routes, Route } from 'react-router-dom'
import './App.css';
import Heder from "../src/Components/Header/Header"
import Home from './Components/Home/Home';
import Login from './Components/Autentication/Login';
import Register from './Components/Autentication/Register';
import Catalog from './Components/Catalog/Catalog';
import Details from './Components/Details/Details';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Heder />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/details/:id' element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
