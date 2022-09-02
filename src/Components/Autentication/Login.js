import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { loginService } from "../../services/api";
import {useNavigate} from 'react-router-dom';
import "./Auth.css"

export default function Login() {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    function loginHandler(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')

        loginService(email, password)
            .then(user => {
                if(user){
                    login(user);
                    navigate('/catalog');
                }     
                
            })
            .catch((err) =>{
                e.target.reset();
                alert(err.message)
            } )

    }

    return (
        <section className="formContainer">
            <div id="card">
                <div id="card-content">
                    <div id="card-title">
                        <h2>LOGIN</h2>
                        <div className="underline-title"></div>
                    </div>
                    <form method="post" className="form" onSubmit={loginHandler}>
                        <label htmlFor="user-email" >
                            &nbsp;Email
                        </label>
                        <input id="user-email" className="form-content" type="email" name="email" autoComplete="on" required />
                        <div className="form-border"></div>
                        <label htmlFor="user-password" style={{ 'paddingTop': '22px' }}>&nbsp;Password
                        </label>
                        <input id="user-password" className="form-content" type="password" name="password" required />
                        <div className="form-border"></div>

                        <input id="submit-btn" type="submit" name="submit" value="LOGIN" />

                    </form>
                </div>
            </div>
        </section>
    );
};