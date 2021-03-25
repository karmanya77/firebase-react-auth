import React, { useRef, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../context/auth-context.jsx";
import "./utils/login.css";

export const Login = () => {

    const emailRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const [error, setError] = useState<string>('');
    const history = useHistory();
    const { login } = useAuth();

    const handleLogin = async () => {
        try {
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/");
        } catch (e) {
            setError(e.message)
        }
    }

    return (
        <div className="signupContainer">
            <h2 className="signup-header">Log In</h2>
            {error &&
                <div className="errorMessage">
                    <span>{error}</span>
                </div>
            }
            <div className="float-container">
                <input type="text" name="Email" id="Email" ref={emailRef} />
                <label htmlFor="Email" className="label-name">
                    <span className="content-name">Email</span>
                </label>
            </div>
            <div className="float-container">
                <input type="password" name="password" id="password" ref={passwordRef} />
                <label htmlFor="password" className="label-name">
                    <span className="content-name">Password</span>
                </label>
            </div>
            <div>
                <button className="submit-button" onClick={handleLogin}>Log In</button>
            </div>
            <span className="signup-link">Need an account? <Link to="/signup">Sign Up</Link></span>
        </div>

    )
}
