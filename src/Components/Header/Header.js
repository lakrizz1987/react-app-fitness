import "./Header.css"
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className="nav">
            <input type="checkbox" id="nav-check" />
            <div className="nav-header">
                <div className="nav-title">
                    FitnessApp.
                </div>
            </div>
            <div className="nav-btn">
                <label for="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>

            <div className="nav-links">
                <Link className="links" to={'/home'}>Home</Link>
                <Link className="links" to={'/catalog'}>Catalog</Link>
                <Link className="links" to={'/login'}>Login</Link>
                <Link className="links" to={'/register'}>Register</Link>
                <Link className="links" to={'/logout'}>Logout</Link>
            </div>
        </div>
    )
}

export default Header;