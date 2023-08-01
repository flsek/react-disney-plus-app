// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT1RFqXrCVYA4_CnyUlFIbmHuFIX8ZQGo",
  authDomain: "react-disney-plus-app-76d12.firebaseapp.com",
  projectId: "react-disney-plus-app-76d12",
  storageBucket: "react-disney-plus-app-76d12.appspot.com",
  messagingSenderId: "563967500559",
  appId: "1:563967500559:web:208353c7daeafe7ed29e7a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
