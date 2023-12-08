// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth  } from "firebase/auth";
import { FIREBASE_API_KEY } from "./constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "netflixgpt-27042.firebaseapp.com",
  projectId: "netflixgpt-27042",
  storageBucket: "netflixgpt-27042.appspot.com",
  messagingSenderId: "709093905990",
  appId: "1:709093905990:web:51fea7409c1dd2f5ea1c47",
  measurementId: "G-4J4TYE3W0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();