// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYj-7ZD83EdHkTNeZPnrYINb69jo5YJYU",
  authDomain: "react-firebase-auth-869f9.firebaseapp.com",
  projectId: "react-firebase-auth-869f9",
  storageBucket: "react-firebase-auth-869f9.firebasestorage.app",
  messagingSenderId: "1091970354861",
  appId: "1:1091970354861:web:eb1c457246c4894e458024"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);