import "./Auth.css"

export default function Register() {

    return (
        <section className="formContainer">
            <div id="card">
                <div id="card-content">
                    <div id="card-title">
                        <h2>REGISTER</h2>
                        <div className="underline-title"></div>
                    </div>
                    <form method="post" className="form">
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