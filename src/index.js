import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // Import createRoot instead of ReactDOM
import App from "./Components/App";
import { AuthProvider } from "./Components/utils/AuthContext";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { auth } from "./Components/firebase";
const root = createRoot(document.getElementById("root")); // Use createRoot

root.render(
  <AuthProvider auth={auth}>
    <StrictMode>
      <App />
    </StrictMode>
  </AuthProvider>
);
