// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirebase} from 'firebase/firstore'
// import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtMIpXmqoY1YVOBjN-QJ6yo_YU0VMiGmA",
  authDomain: "flashcardsaas-3c0fa.firebaseapp.com",
  projectId: "flashcardsaas-3c0fa",
  storageBucket: "flashcardsaas-3c0fa.appspot.com",
  messagingSenderId: "76100683373",
  appId: "1:76100683373:web:898d88460ea2698a03e164",
  measurementId: "G-8C4XNCNP2X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirebase(app)

export {db}


// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
// const firebaseConfig = {
//  apiKey: "YOUR_API_KEY",
//  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
//  projectId: "YOUR_PROJECT_ID",
//  storageBucket: "YOUR_PROJECT_ID.appspot.com",
//  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//  appId: "YOUR_APP_ID"
// };
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// export default db;