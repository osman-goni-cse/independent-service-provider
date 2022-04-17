// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcvlEX1LqROAl9tQR2FJjpwcZiTLpyn38",
  authDomain: "react-firebase-fittuber.firebaseapp.com",
  projectId: "react-firebase-fittuber",
  storageBucket: "react-firebase-fittuber.appspot.com",
  messagingSenderId: "143863185799",
  appId: "1:143863185799:web:8885734f92c61892549322"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;