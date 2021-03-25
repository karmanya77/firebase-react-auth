import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context.jsx";
import "./utils/signup.css";

export const SignupPage = () => {

    const emailRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const confirmPasswordRef = useRef<HTMLInputElement>();
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const { signup } = useAuth();

    const handleSignUp = async () => {
        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            setError("Passwords do not match!")
        }
        try {
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch (e) {
            setError(e.message)
        }
        setLoading(false)
    }

    return (
        <div className="signupContainer">
            <h2 className="signup-header">Sign Up</h2>
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
            <div className="float-container">
                <input type="password" name="confirmPassword" id="confirmPassword" ref={confirmPasswordRef} />
                <label htmlFor="confirmPassword" className="label-name">
                    <span className="content-name">Confirm Password</span>
                </label>
            </div>
            <div>
                <button className="submit-button" onClick={handleSignUp} disabled={loading}>Sign Up</button>
            </div>
            <span className="login-link">Already have an account? <Link to="/login">Log In</Link></span>
        </div>

    )
}