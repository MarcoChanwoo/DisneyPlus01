// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc8-iN9AuqgZVja-_OgFM5ouCF50Ez108",
  authDomain: "react-disney-plus-app-f136e.firebaseapp.com",
  projectId: "react-disney-plus-app-f136e",
  storageBucket: "react-disney-plus-app-f136e.appspot.com",
  messagingSenderId: "65401924311",
  appId: "1:65401924311:web:8b2ffba42c2a36f6d41e92",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
