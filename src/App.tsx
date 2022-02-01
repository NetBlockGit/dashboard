import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./api/index";
import SignIn from "./pages/signin/SignIn";
import { AuthProvider } from "./contexts/AuthProvider";
import Home from "./pages/home/Home";
import { RequireAuth } from "./guards/RequireAuth";
import Filters from "./pages/filters/Filter";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route
            path="/home"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path="/filters"
            element={
              <RequireAuth>
                <Filters />
              </RequireAuth>
            }
          />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
