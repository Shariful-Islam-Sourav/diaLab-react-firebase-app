import { useEffect, useState } from "react";
import FirebaseInitialize from "../Firebase/Firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

FirebaseInitialize();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  //Google Sign-in
  const signInUsingGoogle = () => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // const user = result.user;
        setIsLoading(false);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  //Register New user
  const signInNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // const user = userCredential.user;
    setError('');
  })
  .catch((error) => {
    const errorMessage = error.message;
    setError(errorMessage);
  });
  }
  //Login With email and password
  const loginWithEmailPassword = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    // const user = userCredential.user;
    setError('');
  })
  .catch((error) => {
    const errorMessage = error.message;
    setError(errorMessage);
  });
  }
  //User Sign-Out
  const signOutUser = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  //Watcher
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, [auth]);
  return {
    user,
    error,
    isLoading,
    signInUsingGoogle,
    signInNewUser,
    loginWithEmailPassword,
    signOutUser,
  };
};

export default useFirebase;
