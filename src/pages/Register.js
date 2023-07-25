import React, { useState } from 'react';
import {auth} from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate, Link } from 'react-router-dom';
import '../components/auth/auth.css';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const register = (e) => {
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
                setError(error.message);
            });
    };

    return (
        <div className='auth-container'>
            <form onSubmit={register}>
                <h1>Create Account</h1>
                <input type='text' placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <input type='text' placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Register</button>
                {error && <p className="error-message">{error}</p>}
            </form>
            <div className="link-container">
                <p><Link to="/signin">Already have an account?</Link></p>
            </div>
        </div>
    );
}

export default Register;


