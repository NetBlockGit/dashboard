import React from "react";
import { Style } from "./stylecard";
type props = { placeholder: string; place: string };

export default function Card(p: props) {
  return (
    <Style>
      <div className="container">
        <div className="card">
          <div className="box">
            <div className="content">
              <h2>{p.placeholder}</h2>
              <p>{p.place}</p>
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
}
