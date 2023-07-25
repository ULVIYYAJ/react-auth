import React, { useState, useEffect } from 'react';
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import './auth.css';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                return updateProfile(userCredential.user, {
                    displayName: `${firstName} ${lastName}`,
                }).then(() => {
                    navigate("/welcome");
                });
            })
            .catch((error) => {
                setError(error)
            })
    }

    return (
        <div className='auth-container'>
            <form onSubmit={signUp}>
                <h1>Create Account</h1>
                <input type='text'
                       placeholder='Enter your first name'
                       value={firstName}
                       onChange={(e) => setFirstName(e.target.value)}
                ></input>
                <input type='text'
                       placeholder='Enter your last name'
                       value={lastName}
                       onChange={(e) => setLastName(e.target.value)}
                ></input>
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
                <button type='submit'>Sign Up</button>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
}

export default SignUp;


