// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDf4BDJ__kHIGFbqHfHJ7rTfsLxf_-g7iQ",
  authDomain: "firestore-bf729.firebaseapp.com",
  databaseURL: "https://firestore-bf729-default-rtdb.firebaseio.com",
  projectId: "firestore-bf729",
  storageBucket: "firestore-bf729.firebasestorage.app",
  messagingSenderId: "641564337355",
  appId: "1:641564337355:web:051689884a338311a1e74e",
  measurementId: "G-GG8RGLLWK1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);