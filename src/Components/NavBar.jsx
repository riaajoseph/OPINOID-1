import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/NavBar.css";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase"; // Make sure the path is correct
import QueryIdentification from "./Queries";
import { LogIn } from "lucide-react";
import Analyser from "./Analyser";
import AboutUs from "./AboutUs";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful");
      })
      .catch((error) => {
        console.error("Sign-out error", error);
      });
  };

  return (
    <nav className="navbar">
      <Link to="/" className="title" onClick={closeMenu}>
        OPINOID
      </Link>
      <div className="menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link to="/" onClick={closeMenu}>
            <button type="button">Home</button>
          </Link>
        </li>
        <li>
          <Link to="/about" path={<AboutUs />}>
            <button type="button">About Us</button>
          </Link>
        </li>
        <li>
          <Link to="/analyser" path={<Analyser />}>
            <button type="button">Comment Analysis</button>
          </Link>
        </li>
        <li>
          <Link to="/queries" path={<QueryIdentification />}>
            <button type="button">Queries</button>
          </Link>
        </li>
        <li>
          {user ? (
            <button type="button" onClick={handleSignOut}>
              Sign Out
            </button>
          ) : (
            <Link to="/login" path={<LogIn />}>
              <button type="button">Login</button>
            </Link>
          )}
        </li>
       
      </ul>
    </nav>
  );
};

export default Navbar;
