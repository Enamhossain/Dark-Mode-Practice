

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApTLb7SeHmMrmpitJxwqwRuh-hpKHazhw",
  authDomain: "react-auth-22077.firebaseapp.com",
  projectId: "react-auth-22077",
  storageBucket: "react-auth-22077.appspot.com",
  messagingSenderId: "658312249048",
  appId: "1:658312249048:web:8d8bb61dfde1ec416361ad",
  measurementId: "G-3Z9SRH5314"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app