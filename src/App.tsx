import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./api/index";
import { AuthProvider } from "./contexts/AuthProvider";
import Dash from "./pages/dash/Dash";
import SignIn from "./pages/signin/SignIn";


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dash" replace />} />
        <Route path="/dash" element={<Navigate to="/dash/home" replace />} />
        <Route path="/dash/*" element={<Dash/>} />
    <Route path="/signin" element={<SignIn />} />
      </Routes>

      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
