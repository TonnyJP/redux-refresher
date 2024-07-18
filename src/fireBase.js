// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBNUD49bYOD3Gk2W37Eaqq2PaqWLK88NDw",
    authDomain: "async-code.firebaseapp.com",
    projectId: "async-code",
    storageBucket: "async-code.appspot.com",
    messagingSenderId: "417768411143",
    appId: "1:417768411143:web:ddcef0e06996f5ed6d9aa2",
    measurementId: "G-4EHZTS0MM2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

analytics();