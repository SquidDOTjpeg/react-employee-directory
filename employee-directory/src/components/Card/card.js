import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card">
      <div className="info">
        <ul>
          <li> Name: {props.name}</li>
          <li> Rank: {props.rank}</li>
        </ul>
      </div>
    </div>
  );
}

export default Card