// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtHpp7sA9aowXZ_C8aHFyj_kMMPRGQKNE",
  authDomain: "netflixgpt-9d452.firebaseapp.com",
  projectId: "netflixgpt-9d452",
  storageBucket: "netflixgpt-9d452.appspot.com",
  messagingSenderId: "245817807822",
  appId: "1:245817807822:web:9cf81e082b2c8670eed19f",
  measurementId: "G-37SGWJY82E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
