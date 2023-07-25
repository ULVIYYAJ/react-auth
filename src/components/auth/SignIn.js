import React, { useState, useEffect } from 'react';
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from 'react-router-dom';
import './auth.css';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const redirectToRegister = () => {
        navigate("/register");
    }
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                navigate("/welcome");
            })
            .catch((error) => {
                if (error.code === "auth/user-not-found") {
                    navigate("/register");
                } else {
                    setError(error.message)
                }
            })
    }
    return (
        <div className='auth-container'>
            <form onSubmit={signIn}>
                <h1>Log In to your Account</h1>
                <input type='email'
                       placeholder='Enter your email'
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input type='password'
                       placeholder='Enter your password'
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                ></input>
                <button type='submit'>Log In</button>
                {error && <p className="error-message">{error}</p>}
            </form>
            <div className="link-container">
                <p><Link to="/register">Don't have an account?</Link></p>
                <p><Link to="/forgot-password">Forgot Password?</Link></p>
            </div>
        </div>
    );
}

export default SignIn;

