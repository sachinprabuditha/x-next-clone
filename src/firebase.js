// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "x-next-v1-d1b9a.firebaseapp.com",
  projectId: "x-next-v1-d1b9a",
  storageBucket: "x-next-v1-d1b9a.appspot.com",
  messagingSenderId: "1019728157137",
  appId: "1:1019728157137:web:5fa295fe188931dbc5a8f0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);