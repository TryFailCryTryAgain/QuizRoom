

export const Login = () => {
    return (
        <>
            <main className="login_layout">
                <div className="login_container">
                    <div className="img"></div>
                    <form className="login_form">
                        <h2>Login</h2>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" />
                        </div>
                        <div className="form-actions">
                            <div className="action_links">
                                <div className="forgot_password">Forgotten password</div>
                                <div className="register">Register an account</div>
                            </div>
                            <input className="submit" type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
};