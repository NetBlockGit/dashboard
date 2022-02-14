import React from "react"
import Home from "../home/Home";
import { RequireAuth } from "../../guards/RequireAuth";
import Filters from "../filters/Filter";
import Admin from "../admin/Admin";
import { Routes, Route } from "react-router-dom";
import StyledDash from "./StyledDash";

import SidePanelTemplet from "../subComponents/sidePanel /SidePanelTemplet";

const Dash = () => {

  return <StyledDash>
    <div>
      <SidePanelTemplet/>
      
        
        
      

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

        
      </Routes>
    </div>
  </StyledDash>
}
export default Dash