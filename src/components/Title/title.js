import React from "react";
import "./style.css";

function Title(props) {
  return (
    <>
      <div className="title">
        <p>My Hero Academia Pro Hero Rankings</p>
      </div>
      <div className="button-div">
        <button onClick={props.defaultSort}>Return to default list</button>
        <button onClick={props.sortByQuirkyness}>Sort by quirkyness</button>
      </div>
    </>
  );
}

export default Title;
