import { useEffect, useState } from "react";
import FirebaseInitialize from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";

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
        setUser({})
      }
      setIsLoading(false);
    });
  }, [auth]);
  return {
      user,
      error,
      isLoading,
      signInUsingGoogle,
      signOutUser
  }
};

export default useFirebase;