// init-firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCP7_j6El_axJcreAJIumVa4pdcLKRveNo",
  authDomain: "devdeakinbhavik.firebaseapp.com",
  projectId: "devdeakinbhavik",
  storageBucket: "devdeakinbhavik.firebasestorage.app",
  messagingSenderId: "131994049731",
  appId: "1:131994049731:web:f76049993a98e5ee9b5676",
  measurementId: "G-53R5CWBND4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Firebase Auth
export const auth = getAuth(app);
