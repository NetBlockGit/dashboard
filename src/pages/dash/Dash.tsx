import React from "react"
import Home from "../home/Home";
import { RequireAuth } from "../../guards/RequireAuth";
import Filters from "../filters/Filter";
import Admin from "../admin/Admin";
import { Routes, Route, Link } from "react-router-dom";
import SignIn from "../signin/SignIn";
import StyledDash from "./StyledDash";

const Dash = ()=>{
    
    return <StyledDash>
        <div className="left-panel">
        <Link to="/dash/home">
        <div className="item">Home</div>
        </Link>
        <Link to="/dash/filters">
            <div className="item">Filters</div>
        </Link>
        <Link to="/dash/admin">
            <div className="item">Admin</div>
        </Link>
        </div>
        <div className="outlet">
        <Routes>
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
    <Route
      path="/admin"
      element={
        <RequireAuth>
          <Admin />
        </RequireAuth>
      }
    />
    <Route path="/signin" element={<SignIn />} />
    </Routes>
        </div>
   </StyledDash>
}
export default Dash