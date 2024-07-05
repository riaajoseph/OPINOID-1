// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5DPUkxyKNfc5n7P7uw7ZAxkYweaXB2CY",
  authDomain: "react-auth-5cc0e.firebaseapp.com",
  projectId: "react-auth-5cc0e",
  storageBucket: "react-auth-5cc0e.appspot.com",
  messagingSenderId: "512760321575",
  appId: "1:512760321575:web:b234f68daca4b0e751a002",
  measurementId: "G-90SS3TYDFE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { app, analytics, auth };