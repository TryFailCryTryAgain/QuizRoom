import { Link } from "react-router-dom";
import type { FormEvent } from "react";

export const Register = () => {

    const CheckStatus = (e: FormEvent) => {
        e.preventDefault();
        console.log("registerd");
    }


    return (
        <>
            <main className="login_layout">
                <div className="login-container">
                    <div className="login-wrapper">
                        <div className="login-section">
                            <div className="login-header">
                                <div className="login-title">
                                    <h3>Register</h3>
                                </div>
                            </div>
                            
                            <form className="login-form" onSubmit={CheckStatus}>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="username">Username</label>
                                    <input type="text" className="form-input" id="username" placeholder="Enter your username" required />
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="email">Email</label>
                                    <input type="text" className="form-input" id="email" placeholder="Enter your E-mail" required />
                                </div>
                                
                                <div className="form-group">
                                    <label className="form-label" htmlFor="password">Password</label>
                                    <input type="password" className="form-input" id="password" placeholder="Enter your password" required />
                                </div>

                                <div className="form-group">
                                    <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                                    <input type="password" className="form-input" id="confirmPassword" placeholder="Confirm your password" required />
                                </div>
                                
                                <div className="form-group">
                                    <button type="submit" className="submit-btn">Sign Up</button>
                                </div>
                            </form>
                        </div>
                        
                        <div className="welcome-section">
                            <div className="welcome-content">
                                <h2>Welcome to Login</h2>
                                <p>Already have an account?</p>
                                <Link to="/login" className="signup-btn">Sign in</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};