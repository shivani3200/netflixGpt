// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIAJpX9TQ8BeE1uZZUjJs-Kd55e_ADvP0",
  authDomain: "netflixgpt-shiv.firebaseapp.com",
  projectId: "netflixgpt-shiv",
  storageBucket: "netflixgpt-shiv.firebasestorage.app",
  messagingSenderId: "420323000504",
  appId: "1:420323000504:web:a1eb19cc8e1d60b5b7744d",
  measurementId: "G-X75203PJM8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app)
const analytics = getAnalytics(app);

export const auth = getAuth();