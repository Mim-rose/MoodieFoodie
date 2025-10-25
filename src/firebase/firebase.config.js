// src/firebase/firebase.config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Load config from Vite environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID, // optional if not using Analytics
};

// 🔍 Log missing values for debugging
Object.entries(firebaseConfig).forEach(([key, value]) => {
  if (!value) console.warn(`⚠️ Missing Firebase config value: ${key}`);
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Pass app explicitly

// Export what you need
export { app, auth };
