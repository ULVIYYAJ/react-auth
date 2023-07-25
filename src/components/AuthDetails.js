import React, { useState, useEffect } from 'react';
import { auth } from "../firebase";
import { onAuthStateChanged, signOut} from 'firebase/auth';
import {Navigate, useNavigate} from "react-router-dom";

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null);
            }
        });
        return () => {
            listen();
        }
    }, []);

    const userSignOut = () => {
        signOut(auth).then(() => {
            navigate('/login');
        }).catch(error => console.log(error))
    }
    return (
        <div>
            {authUser ? <><h1>Welcome, {authUser.email}!</h1><button onClick={userSignOut}>Sign Out</button></> : <p>Signed Out</p>}
        </div>
    );
}

export default AuthDetails;


