// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCF61ydyyV81KzJ7KIX_OtipSh1L7HKqQ",
  authDomain: "netflixgpt-fee9a.firebaseapp.com",
  projectId: "netflixgpt-fee9a",
  storageBucket: "netflixgpt-fee9a.firebasestorage.app",
  messagingSenderId: "748368431478",
  appId: "1:748368431478:web:5be8267041bd99a58c5257",
  measurementId: "G-QKTXN6GXQY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();