import { createContext, useContext, useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithPhoneNumber,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";
import {
  auth,
  googleProvider,
  facebookProvider,
  appleProvider,
  microsoftProvider,
  setupRecaptcha,
} from "../firebase/config";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [confirmationResult, setConfirmationResult] = useState(null);

  // Email/Password Sign Up
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // Email/Password Login
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Google Sign In
  function signInWithGoogle() {
    return signInWithPopup(auth, googleProvider);
  }

  // Facebook Sign In
  function signInWithFacebook() {
    return signInWithPopup(auth, facebookProvider);
  }

  // Apple Sign In
  function signInWithApple() {
    return signInWithPopup(auth, appleProvider);
  }

  // Microsoft Sign In
  function signInWithMicrosoft() {
    return signInWithPopup(auth, microsoftProvider);
  }

  // Phone OTP - Send Code
  async function sendPhoneOTP(phoneNumber, recaptchaContainerId) {
    const recaptchaVerifier = setupRecaptcha(recaptchaContainerId);
    const result = await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);
    setConfirmationResult(result);
    return result;
  }

  // Phone OTP - Verify Code
  async function verifyPhoneOTP(code) {
    if (!confirmationResult) {
      throw new Error("No confirmation result. Send OTP first.");
    }
    return confirmationResult.confirm(code);
  }

  // Email Link (Passwordless) - Send Link
  function sendEmailLink(email) {
    const actionCodeSettings = {
      url: window.location.origin + '/login?mode=emailLink',
      handleCodeInApp: true,
    };
    // Save email for later verification
    window.localStorage.setItem('emailForSignIn', email);
    return sendSignInLinkToEmail(auth, email, actionCodeSettings);
  }

  // Email Link (Passwordless) - Complete Sign In
  function completeEmailLinkSignIn(email, link) {
    return signInWithEmailLink(auth, email, link);
  }

  // Check if URL is email sign-in link
  function isEmailSignInLink(link) {
    return isSignInWithEmailLink(auth, link);
  }

  // Logout
  function logout() {
    setConfirmationResult(null);
    return signOut(auth);
  }

  // Password Reset
  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    signInWithGoogle,
    signInWithFacebook,
    signInWithApple,
    signInWithMicrosoft,
    resetPassword,
    // OTP Methods
    sendPhoneOTP,
    verifyPhoneOTP,
    // Email Link Methods
    sendEmailLink,
    completeEmailLinkSignIn,
    isEmailSignInLink,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
