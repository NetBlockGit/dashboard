import React from "react";
import Style_ItemComponents from "../Style_ItemComponents";
import { Link } from "react-router-dom";

const Filter_ItemComponnt = () => {
  return (
    <Style_ItemComponents>
      <button className="home">
        <div>
          <Link className="col" to="/dash/filters">
            <span
              className="iconify f_hicon"
              data-icon="clarity:filter-solid"
            ></span>
            {/* <span className="iconify hicon" data-icon={props.dataIcon}></span>  */}
            <span className="pad">Filter</span>
          </Link>
        </div>
      </button>
    </Style_ItemComponents>
  );
};

export default Filter_ItemComponnt;
