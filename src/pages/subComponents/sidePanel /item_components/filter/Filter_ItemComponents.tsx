import React from "react";
// import Home from "/workspace/dashboard/src/pages/home/Home";
import Style_ItemComponents from "../Style_ItemComponents";

import Home from "/workspace/dashboard/src/pages/home/Home";
import { RequireAuth } from "../../../../../guards/RequireAuth";
import Filters from "../../../../filters/Filter";
import Admin from "../../../../admin/Admin";
import { Routes, Route, Link } from "react-router-dom";
import StyledDash from "../../../../dash/StyledDash";

const Filter_ItemComponnt = () =>  {
    return (
        <Style_ItemComponents>

        <button className="home">
            <div>
            <Link className="col" to="/dash/filters">
            <span className="iconify f_hicon" data-icon="clarity:filter-solid"></span>
            {/* <span className="iconify hicon" data-icon={props.dataIcon}></span>  */}
            <span className="pad">
                Filter
            </span>
            </Link>
            </div>
        </button>

    </Style_ItemComponents>
    )
}

export default Filter_ItemComponnt