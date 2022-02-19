import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./api/index";
import { AuthProvider } from "./contexts/AuthProvider";
import Dash from "./pages/dash/Dash";
import SignIn from "./pages/signin/SignIn";
import EnhancedLoader from "./Component/EnhancedLoader/EnhancedLoader";
import EnhancedToast from "./Component/EnhancedToast/EnchancedToast";

function App() {
  useEffect(() => {
    window.ethereum.request({ method: "eth_requestAccounts" });
  }, []);
  return (
    <AuthProvider>
      <EnhancedLoader />
      <EnhancedToast />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/dash" replace />} />
          <Route path="/dash" element={<Navigate to="/dash/home" replace />} />
          <Route path="/dash/*" element={<Dash />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
