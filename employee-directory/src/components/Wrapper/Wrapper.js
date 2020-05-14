import React from "react";
import "./style";
import Card from "../Card/card";

function Wrapper(props) {
  <div className="container">
    {props.employees.forEach((element) => {
      <Card employees={props.children} />;
    })}
  </div>;
}

export default Wrapper;
