// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrGkYj4Spea-eqUL8mwpB0Wan7iNQUlf4",
  authDomain: "brand-shop-a6f33.firebaseapp.com",
  projectId: "brand-shop-a6f33",
  storageBucket: "brand-shop-a6f33.appspot.com",
  messagingSenderId: "324503741474",
  appId: "1:324503741474:web:1d77169f1cd299730b567b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

