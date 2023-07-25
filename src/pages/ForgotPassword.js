import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { Link } from "react-router-dom";
import {auth} from "../firebase";
import '../components/auth/auth.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
    const [error, setError] = useState(null);

    const sendResetEmail = event => {
        event.preventDefault();
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setEmailHasBeenSent(true);
                setTimeout(() => { setEmailHasBeenSent(false) }, 3000);
            })
            .catch(() => {
                setError("Error resetting password");
            });
    };

    return (
        <div className='auth-container'>
            <form onSubmit={sendResetEmail}>
                <h1>Reset your Password</h1>
                {emailHasBeenSent && (
                    <div>
                        An email has been sent to you!
                    </div>
                )}
                {error !== null && (
                    <div className="error-message">
                        {error}
                    </div>
                )}
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <button type='submit'>
                    Send me a reset link
                </button>
            </form>
            <div className="link-container">
                <p><Link to="/login">Back to Sign In page</Link></p>
            </div>
        </div>
    );
};

export default ForgotPassword;

