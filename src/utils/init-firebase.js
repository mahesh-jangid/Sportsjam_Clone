import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-zVhNeeSmaeA1MmjMCg4jAHfEz_G1kiY",
  authDomain: "sportsjam-7221e.firebaseapp.com",
  databaseURL: "https://sportsjam-7221e-default-rtdb.firebaseio.com",
  projectId: "sportsjam-7221e",
  storageBucket: "sportsjam-7221e.appspot.com",
  messagingSenderId: "254194887768",
  appId: "1:254194887768:web:af7d18be2a709fba7b6e2d",
  measurementId: "G-2XTG4JHLVE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
