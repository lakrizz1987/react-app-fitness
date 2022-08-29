import "./Auth.css"

export default function Register() {

    return (
        <section className="formContainer">
            <div id="card">
                <div id="card-content">
                    <div id="card-title">
                        <h2>REGISTER</h2>
                        <div class="underline-title"></div>
                    </div>
                    <form method="post" class="form">
                        <label for="email" >&nbsp;Email</label>
                        <input id="email" class="form-content" type="email" name="email" autocomplete="on" required />
                        <div class="form-border"></div>
                        <label for="user-password" style={{ 'padding-top': '22px' }}>&nbsp;Password</label>
                        <input id="password" class="form-content" type="password" name="password" required />
                        <div class="form-border"></div>
                        <label for="repass" style={{ 'padding-top': '22px' }}>&nbsp;Repeat Password</label>
                        <input id="repass" class="form-content" type="password" name="repassword" required />
                        <div class="form-border"></div>

                        <input id="submit-btn" type="submit" name="submit" value="REGISTER" />

                    </form>
                </div>
            </div>
        </section>
    );
};