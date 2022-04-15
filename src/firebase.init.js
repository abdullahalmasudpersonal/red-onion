// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDpDSzM8dkv0LIDuvcY0A-QrcZVIXuPX4",
  authDomain: "red-onion-58276.firebaseapp.com",
  projectId: "red-onion-58276",
  storageBucket: "red-onion-58276.appspot.com",
  messagingSenderId: "1063851244862",
  appId: "1:1063851244862:web:f88c47ecbaddf59a35c06f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;