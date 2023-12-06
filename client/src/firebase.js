// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a9953.firebaseapp.com",
  projectId: "mern-estate-a9953",
  storageBucket: "mern-estate-a9953.appspot.com",
  messagingSenderId: "102324653171",
  appId: "1:102324653171:web:4a8ecfa13623af46806e06",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
