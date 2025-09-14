import { Link } from "react-router-dom";

export const Login = () => {
    return (
        <>
            <main className="login_layout">
                <div className="login-container">
                    <div className="login-wrapper">
                        <div className="login-section">
                            <div className="login-header">
                                <div className="login-title">
                                    <h3>Sign In</h3>
                                </div>
                            </div>
                            
                            <form className="login-form">
                                <div className="form-group">
                                    <label className="form-label" htmlFor="username">Username</label>
                                    <input type="text" className="form-input" id="username" placeholder="Enter your username" required />
                                </div>
                                
                                <div className="form-group">
                                    <label className="form-label" htmlFor="password">Password</label>
                                    <input type="password" className="form-input" id="password" placeholder="Enter your password" required />
                                </div>
                                
                                <div className="form-group">
                                    <button type="submit" className="submit-btn">Sign In</button>
                                </div>
                                
                                <div className="form-options">
                                    <label className="remember-me">
                                        <input type="checkbox" /> Remember Me
                                    </label>
                                    <a href="#" className="forgot-password">Forgot Password?</a>
                                </div>
                            </form>
                            
                            {/* <div className="divider">
                                <span className="divider-text">Or continue with</span>
                            </div>
                            
                            <div className="alternative-login">
                                <a href="#" className="google-login">
                                    <i className="fab fa-google google-icon"></i> Sign in with Google
                                </a>
                            </div> */}
                        </div>
                        
                        <div className="welcome-section">
                            <div className="welcome-content">
                                <h2>Welcome to Login</h2>
                                <p>Don't have an account?</p>
                                <Link to="/register" className="signup-btn">Sign up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};