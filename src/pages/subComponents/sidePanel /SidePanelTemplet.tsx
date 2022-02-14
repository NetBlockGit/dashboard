import React from "react";

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
        </Style_sidePanelTemplet>
    )
}

export default SidePanelTemplet

