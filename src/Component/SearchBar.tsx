import React from "react";
import { Style } from "./Style";

export default function SearchBar (props: { queryProcess: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) {
return(
    <Style>
        <div className = "boxcontainer">
            <table className="elementsContainer">
                <tr>
                    <td>
                        <input type="text" placeholder="Search"
                        className="search"/>
                    </td>
                </tr>     
            </table>
        </div>  
    </Style>
)
}