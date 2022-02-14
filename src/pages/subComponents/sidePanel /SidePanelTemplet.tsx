import React from "react";

import Home from "../../home/Home";
import { RequireAuth } from "../../../guards/RequireAuth";
import Filters from "../../filters/Filter";
import Admin from "../../admin/Admin";
import { Routes, Route, Link } from "react-router-dom";
import StyledDash from "../../dash/StyledDash";


import Style_sidePanelTemplet from "./Style_sidePanelTemplet";
import Home_ItemComponnt from "./item_components/home/Home_ItemComponents";
import Filter_ItemComponnt from "./item_components/filter/Filter_ItemComponents";
import Admin_ItemComponnt from "./item_components/admin/Admin_ItemComponents";
const SidePanelTemplet = () => {

    return (
        <Style_sidePanelTemplet>
            <div className="left-panel">
                <h1 className="bn">BlockNet</h1>
                <Home_ItemComponnt />
                <Filter_ItemComponnt/>
                <Admin_ItemComponnt/>
            </div>

            {/* <div className="outlet"> */}
      {/* <Routes>
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
    </div> */}
            


        </Style_sidePanelTemplet>
    )
}

export default SidePanelTemplet

