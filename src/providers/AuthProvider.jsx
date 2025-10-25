import React, { useState, useEffect, createContext } from 'react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail
} from "firebase/auth";
import { app, auth } from '../firebase/firebase.config';

const API_URL = import.meta.env.VITE_API_URL;

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in with email and password
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign out and clear token
  const logOut = () => {
    setLoading(true);
    localStorage.removeItem('accessToken'); // 🧹 Clear token
    return signOut(auth);
  };

  // Update Firebase profile and sync with backend
  const updateUserProfile = async (profile) => {
    if (!auth.currentUser) throw new Error("No authenticated user");

    await updateProfile(auth.currentUser, profile);

    const updatedUser = { ...auth.currentUser, displayName: profile.displayName };
    setUser(updatedUser);

    await fetch(`${API_URL}/user/${auth.currentUser.uid}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profile),
    });

    return updatedUser;
  };

  // Google sign-in
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Password reset
  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          // Step 1: Sync user to backend and get token
            // Step 1: Sync user to backend (optional, if needed)
await fetch(`${API_URL}/user`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    userId: currentUser.uid,
    name: currentUser.displayName,
    email: currentUser.email
  })
});

// Step 2: Get JWT token
const jwtRes = await fetch(`${API_URL}/jwt`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ userId: currentUser.uid, email: currentUser.email, role: 'user' })
});

if (!jwtRes.ok) {
  const errBody = await jwtRes.text(); // log raw body so you see HTML or error text
  console.error('JWT request failed:', jwtRes.status, errBody);
  throw new Error('Failed to get JWT');
}

const { token } = await jwtRes.json();
localStorage.setItem('accessToken', token);


          // Step 2: Fetch full user profile including role
          const profileRes = await fetch(`${API_URL}/user/${currentUser.uid}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
          });

          if (profileRes.status === 401) {
            logOut();
            return;
          }

          const userData = await profileRes.json();

          // Step 3: Set user in context with role
          setUser({ ...currentUser, role: userData.role });
        } catch (err) {
          console.error("❌ Failed to sync or fetch user:", err);
          setUser(currentUser); // fallback without role
        }
      } else {
        setUser(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    auth,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
    signInWithGoogle,
    resetPassword,
    token: localStorage.getItem('accessToken') // optional access
   
  };
     
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;