import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "./../firebase/firebase.config";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
    });
    return () => {
      return subscribe();
    };
  }, []);

  const userInfo = {
    user,
    loading,
    createUser,
    loginUser,
    logOut,
    googleLogin,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
