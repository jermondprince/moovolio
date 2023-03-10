import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "./firebase";
import ResponsiveNavbar from "./components/ResponsiveNavbar";
import Home from "./pages/Home";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Account from "./pages/Account";

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
    <div>
      <ResponsiveNavbar user={user} logOut={logOut} />

      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/signup"
          element={<SignUp user={user} signUp={signUp} />}
        />
        <Route path="/login" element={<Login user={user} logIn={logIn} />} />
        <Route
          path="/account"
          element={
            <ProtectedRoute user={user}>
              <Account user={user} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
