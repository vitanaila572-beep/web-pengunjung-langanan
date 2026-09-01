import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDnSOhoYWyaSLxS8uUaJNknzQGeiAeaV7E",
  authDomain: "nexora-719b2.firebaseapp.com",
  projectId: "nexora-719b2",
  storageBucket: "nexora-719b2.firebasestorage.app",
  messagingSenderId: "328409390682",
  appId: "1:328409390682:web:d35c7da65acf70de5bc263"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
