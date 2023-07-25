// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB6rCWwj4WujvaD92Rxx--c5kBxs5QMzOo",
    authDomain: "react-auth-e4e4b.firebaseapp.com",
    projectId: "react-auth-e4e4b",
    storageBucket: "react-auth-e4e4b.appspot.com",
    messagingSenderId: "861202242466",
    appId: "1:861202242466:web:b8f70eb782c8fa75c8b0fb",
    measurementId: "G-8FT4KZYQTP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export { auth };
