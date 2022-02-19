import React from "react";
import Style_ItemComponents from "../Style_ItemComponents";
import { Link } from "react-router-dom";

const Home_ItemComponnt = () => {
  return (
    <Style_ItemComponents>
      <button className="home">
        <div>
          <Link className="col" to="/dash/home">
            <span className="iconify hicon" data-icon="ci:home-alt-fill"></span>
            {/* <span className="iconify hicon"></span>  */}
            <span className="pad bn">Home</span>
          </Link>
        </div>
      </button>
    </Style_ItemComponents>
  );
};

export default Home_ItemComponnt;
