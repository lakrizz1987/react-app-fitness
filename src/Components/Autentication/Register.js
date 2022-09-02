import "./Auth.css"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { registerService } from "../../services/api";

export default function Register() {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    function registerHandler(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')
        const repassword = formData.get('repassword');

        if(password !== repassword){
            alert("Password not match!");
            return
        };

        registerService(email, password)
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
                        <h2>REGISTER</h2>
                        <div className="underline-title"></div>
                    </div>
                    <form method="post" className="form" onSubmit={registerHandler}>
                        <label htmlFor="email" >&nbsp;Email</label>
                        <input id="email" className="form-content" type="email" name="email" autoComplete="on" required />
                        <div className="form-border"></div>
                        <label htmlFor="user-password" style={{'paddingTop':'22px'}}>&nbsp;Password</label>
                        <input id="password" className="form-content" type="password" name="password" required />
                        <div className="form-border"></div>
                        <label htmlFor="repass" style={{'paddingTop':'22px'}}>&nbsp;Repeat Password</label>
                        <input id="repass" className="form-content" type="password" name="repassword" required />
                        <div className="form-border"></div>

                        <input id="submit-btn" type="submit" name="submit" value="REGISTER" />

                    </form>
                </div>
            </div>
        </section>
    );
};