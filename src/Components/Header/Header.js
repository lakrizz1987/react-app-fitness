import "./Header.css"
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from "../../context/AuthContext"
import { useContext } from "react";
import { logoutService } from "../services/api";

function Header() {
    const { login, user } = useContext(AuthContext);
    const navigate = useNavigate();
    
    function logoutHandler(e) {
        e.preventDefault();
        logoutService(user);
        login('');
        localStorage.clear();
        navigate('/');
    }

    return (
        <div className="nav">
            <input type="checkbox" id="nav-check" />
            <div className="nav-header">
                <div className="nav-title">
                    FitnessApp.
                </div>
            </div>
            <div className="nav-btn">
                <label htmlFor="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>

            <div className="nav-links">
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