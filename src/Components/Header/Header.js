import "./Header.css"
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from "../../context/AuthContext"
import { useContext, useState } from "react";
import { logoutService } from "../services/api";

function Header() {
    const { login, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [state, setState] = useState(false)

    function logoutHandler(e) {
        e.preventDefault();
        logoutService(user);
        login('');
        localStorage.clear();
        navigate('/');
    }

    return (
        <div className="nav">
            <input type="checkbox" id="nav-check" checked={state} readOnly />
            <div className="nav-header">
                <div className="nav-title">
                    FitnessApp.
                </div>
            </div>
            <div className="nav-btn" onClick={() => setState(true)}>
                <label htmlFor="nav-check" >
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>

            <div className="nav-links" onClick={(e) => { setState(false) }}>
                <Link className="links" to={'/'}>Home</Link>
                <Link className="links" to={'/catalog'}>Catalog</Link>
                <Link className="links" to={'/login'}>Login</Link>
                <Link className="links" to={'/register'}>Register</Link>
                <Link className="links" to={'/'} onClick={logoutHandler}>Logout</Link>
            </div>
        </div>
    )
}

export default Header;