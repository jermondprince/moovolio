import { useEffect, useState } from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "./firebase";
import Navbar from "./components/Navbar";

function App() {
  // State
  const [user, setUser] = useState({});

  // Sign up function
  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, "users", email), {
      savedShows: [],
    });
  }

  // Login function
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Log out function
  function logOut() {
    return signOut(auth);
  }

  // Effect when the auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home user={user} logOut={logOut} />} />
      </Routes>
    </div>
  );
}

export default App;
