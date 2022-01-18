import React from "react";
import { Style } from "./Style";
type props = { placeholder: string };

export default function SearchBar(p: props) {
  return (
    <Style>
      <div className="boxcontainer">
        <table className="elementsContainer">
          <tr>
            <td>
              <input
                type="text"
                placeholder={p.placeholder}
                className="search"
              />
            </td>
          </tr>
        </table>
      </div>
    </Style>
  );
}
