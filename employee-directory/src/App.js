import React, { useState, Component } from "react";
import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper";
import employees from "./employees.json";

class App extends Component {
  state = {
    employees,
  };
  
  render() {
    return(
      <Wrapper employees={this.state.employees}/>
    )
  }
}

export default App;
