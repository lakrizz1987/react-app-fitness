import { Routes, Route } from 'react-router-dom'
import './App.css';
import Heder from "../src/Components/Header/Header"
import Home from './Components/Home/Home';
import Login from './Components/Autentication/Login';
import Register from './Components/Autentication/Register';
import Catalog from './Components/Catalog/Catalog';
import Details from './Components/Details/Details';
import  Logout  from './Components/Details/Logout';

function App() {
  return (
    <div className="App">
      <Heder />
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/catalog' element={<Catalog/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/logout' element={<Logout/>}/>
      </Routes>
      <footer>
        <div>
          <p style={{'color':'white'}}>Design Ivaylo Ignatov</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
