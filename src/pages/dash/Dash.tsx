import React from "react"
import Home from "../home/Home";
import { RequireAuth } from "../../guards/RequireAuth";
import Filters from "../filters/Filter";
import Admin from "../admin/Admin";
import { Routes, Route, Link } from "react-router-dom";
import StyledDash from "./StyledDash";
import Home_ItemComponnt from "../subComponents/sidePanel /item_components/home/Home_ItemComponents";
import Filter_ItemComponnt from "../subComponents/sidePanel /item_components/filter/Filter_ItemComponents";
import Admin_ItemComponnt from "../subComponents/sidePanel /item_components/admin/Admin_ItemComponents";


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