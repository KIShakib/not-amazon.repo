// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJL9PdTO91EIAZc3I05nVFKq-WRSY-gcQ",
  authDomain: "emajon-shopping-cart-app.firebaseapp.com",
  projectId: "emajon-shopping-cart-app",
  storageBucket: "emajon-shopping-cart-app.appspot.com",
  messagingSenderId: "112767710101",
  appId: "1:112767710101:web:ded2cafeb9735cbd467c9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;