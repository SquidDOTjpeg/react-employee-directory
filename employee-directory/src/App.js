import React, { Component } from "react";
import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper";
import employees from "./employees.json";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";

class App extends Component {
  state = {
    employees,
  };

  render() {
    return (
      <Wrapper employees={this.state.employees}>
        {this.state.employees.map((el) => (
          <Card id={el.id} key={el.id} name={el.name} rank={el.rank} quirkyness={el.quirkyness} />
        ))}
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
