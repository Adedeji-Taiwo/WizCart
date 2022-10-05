// Import the functions you need from the SDKs you need.
import firebase from "firebase/compat/app";
import "firebase/compat/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ecommerce-b7c65.firebaseapp.com",
  projectId: "ecommerce-b7c65",
  storageBucket: "ecommerce-b7c65.appspot.com",
  messagingSenderId: "45436486623",
  appId: "1:45436486623:web:348d4c7d1cade34fa57a6a",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
