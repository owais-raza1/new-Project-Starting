// src/config/firebase/FirebaseConfig.ts

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjP-dEjg1ClJ8CwXd5AuS9ewlAJHbZXUM",
  authDomain: "new-project-110e3.firebaseapp.com",
  projectId: "new-project-110e3",
  storageBucket: "new-project-110e3.appspot.com",
  messagingSenderId: "58365315179",
  appId: "1:58365315179:web:f166cb72723fbb05de092e",
  measurementId: "G-M524MX5Y7X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
