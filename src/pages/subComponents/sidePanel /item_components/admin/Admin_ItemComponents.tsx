import React from "react";
// import Home from "/workspace/dashboard/src/pages/home/Home";
import Style_ItemComponents from "../Style_ItemComponents";

import Home from "/workspace/dashboard/src/pages/home/Home";
import { RequireAuth } from "../../../../../guards/RequireAuth";
import Filters from "../../../../filters/Filter";
import Admin from "../../../../admin/Admin";
import { Routes, Route, Link } from "react-router-dom";
import StyledDash from "../../../../dash/StyledDash";

const Admin_ItemComponnt = () =>  {
    return (
        <Style_ItemComponents>

        <button className="home">
            <div>
            <Link className="col" to="/dash/admin">
            <span className="iconify A_hicon" data-icon="clarity:administrator-solid"></span>
            <span className="pad">
                Admin
            </span>
            </Link>
            </div>
        </button>

    </Style_ItemComponents>
    )
}

export default Admin_ItemComponnt