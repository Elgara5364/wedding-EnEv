// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLOALP-U70Rvf69AzyE2ds3w2n5JeIxJk",
  authDomain: "wedding-enev.firebaseapp.com",
  databaseURL:
    "https://wedding-enev-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "wedding-enev",
  storageBucket: "wedding-enev.firebasestorage.app",
  messagingSenderId: "354262592961",
  appId: "1:354262592961:web:285097457bd4b5d8231340",
  // measurementId: "G-DLLZ0QMR89",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export default db;
