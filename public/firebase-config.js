// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT.firebaseapp.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

const app = initializeApp(firebaseConfig);
