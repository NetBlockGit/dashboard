import React from "react";
// import Home from "/workspace/dashboard/src/pages/home/Home";
import Style_ItemComponents from "../Style_ItemComponents";

import Home from "/workspace/dashboard/src/pages/home/Home";
import { RequireAuth } from "../../../../../guards/RequireAuth";
import Filters from "../../../../filters/Filter";
import Admin from "../../../../admin/Admin";
import { Routes, Route, Link } from "react-router-dom";
import StyledDash from "../../../../dash/StyledDash";

const Home_ItemComponnt = () => {
    return (
        <Style_ItemComponents>

            <button className="home">
                <div>
                <Link className="col" to="/dash/home">
                    <span className="iconify hicon" data-icon="ci:home-alt-fill"></span>
                    {/* <span className="iconify hicon"></span>  */}
                    <span className="pad bn">
                        Home
                    </span>
                    </Link>
                </div>
            </button>

        </Style_ItemComponents>
    )
}

export default Home_ItemComponnt