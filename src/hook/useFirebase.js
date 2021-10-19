import { useEffect, useState } from "react";
import FirebaseInitialize from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

FirebaseInitialize();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  //Google Sign-in
  const signInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // const user = result.user;
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  //User Sign-Out
const signOutUser = () => {
    signOut(auth)
      .then(() => {
        setUser({});
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
      }
    });
  }, []);
  return {
      user,
      error,
      signInUsingGoogle,
      signOutUser
  }
};

export default useFirebase;