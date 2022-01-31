import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./Component/Card/Card";
// import SearchBar from "./Component/Search/SearchBar";
import "./api/index";
import SignIn from "./pages/signin/SignIn";

function App() {
  return (
    // <SearchBar placeholder="Search" />;
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
