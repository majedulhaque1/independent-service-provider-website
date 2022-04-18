// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdUrEqV8rMcth0yf6Lk4XQO2NEcCaZncM",
  authDomain: "well-madicare-center.firebaseapp.com",
  projectId: "well-madicare-center",
  storageBucket: "well-madicare-center.appspot.com",
  messagingSenderId: "108466721865",
  appId: "1:108466721865:web:1356cf5ba3be49d39b5b98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

