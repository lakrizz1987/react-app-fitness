import { Routes, Route } from 'react-router-dom'
import './App.css';
import Heder from "../src/Components/Header/Header"
import Home from './Components/Home/Home';
import Login from './Components/Autentication/Login';
import Register from './Components/Autentication/Register';
import Catalog from './Components/Catalog/Catalog';
import Details from './Components/Details/Details';
import Footer from './Components/Footer/Footer';
import useAuthHook from './Components/hooks/authHook';
import AuthContext from './context/AuthContext';
import All from './Components/Catalog/Category/All';
import Chest from './Components/Catalog/Category/Chest';
import Back from './Components/Catalog/Category/Back';

const initalValue = '';

function App() {

    const [user, setUser] = useAuthHook('user', initalValue);

    function login(user) {
        setUser(user)
    };



    return (
        <div className="App">
            <AuthContext.Provider value={{ user, login }}>
                <Heder />
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/' element={<Home />} />
                    <Route path='/catalog' element={<Catalog />}>
                        <Route path='all' element={<All />}></Route>
                        <Route path='chest' element={<Chest />}></Route>
                        <Route path='back' element={<Back />}></Route>
                    </Route>
                    <Route path='/details/:id' element={<Details />} />
                </Routes>
                <Footer />
            </AuthContext.Provider>
        </div>
    );
}

export default App;
