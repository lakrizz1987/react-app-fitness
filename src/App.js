import { Routes, Route } from 'react-router-dom'
import './App.css';
import Heder from "../src/Components/Header/Header"
import Home from './Components/Home/Home';
import Login from './Components/Autentication/Login';
import Register from './Components/Autentication/Register';
import Catalog from './Components/Catalog/Catalog';
import Details from './Components/Details/Details';
import Footer from './Components/Footer/Footer';
import All from './Components/Catalog/Category/All';
import Chest from './Components/Catalog/Category/Chest';
import Back from './Components/Catalog/Category/Back';
import Arms from './Components/Catalog/Category/Arms';
import Shoulders from './Components/Catalog/Category/Shoulders';
import Legs from './Components/Catalog/Category/Legs';
import Favorites from './Components/Favorites/Favorites';
import { AuthProvider } from "./context/AuthContext"


function App() {

    return (
        <div className="App">
            <AuthProvider>
                <Heder />
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/catalog' element={<Catalog />}>
                        <Route path='all' element={<All />}></Route>
                        <Route path='chest' element={<Chest />}></Route>
                        <Route path='back' element={<Back />}></Route>
                        <Route path='arms' element={<Arms />}></Route>
                        <Route path='shoulders' element={<Shoulders />}></Route>
                        <Route path='legs' element={<Legs />}></Route>
                    </Route>
                    <Route path='/details/:id' element={<Details/>} />
                    <Route path='/my-trainings'  element={<Favorites/>} />
                </Routes>
                <Footer />
            </AuthProvider>
        </div>
    );
}

export default App;
