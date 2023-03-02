import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAH-y4MLhyx9MZroSTgH6ymhPEOP4rsAM0",
  authDomain: "moovolio.firebaseapp.com",
  projectId: "moovolio",
  storageBucket: "moovolio.appspot.com",
  messagingSenderId: "936328344019",
  appId: "1:936328344019:web:4c9cec6e833891c0f6bf26",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
