import React from "react";
import Style_ItemComponents from "../Style_ItemComponents";
import { Link } from "react-router-dom";

const Admin_ItemComponnt = () => {
  return (
    <Style_ItemComponents>
      <button className="home">
        <div>
          <Link className="col" to="/dash/admin">
            <span
              className="iconify A_hicon"
              data-icon="clarity:administrator-solid"
            ></span>
            <span className="pad">Admin</span>
          </Link>
        </div>
      </button>
    </Style_ItemComponents>
  );
};

export default Admin_ItemComponnt;
