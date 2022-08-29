import "./Auth.css"

export default function Login() {

    return (
        <section className="formContainer">
            <div id="card">
                <div id="card-content">
                    <div id="card-title">
                        <h2>LOGIN</h2>
                        <div class="underline-title"></div>
                    </div>
                    <form method="post" class="form">
                        <label htmlFor="user-email" >
                            &nbsp;Email
                        </label>
                        <input id="user-email" class="form-content" type="email" name="email" autocomplete="on" required />
                        <div class="form-border"></div>
                        <label htmlFor="user-password" style={{ 'padding-top': '22px' }}>&nbsp;Password
                        </label>
                        <input id="user-password" class="form-content" type="password" name="password" required />
                        <div class="form-border"></div>

                        <input id="submit-btn" type="submit" name="submit" value="LOGIN" />

                    </form>
                </div>
            </div>
        </section>
    );
};