import React, { Component } from "react";
import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper";
import employees from "./employees.json";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";
import Title from "./components/Title/title"

class App extends Component {
  state = {
    employees,
  };

  defaultSort = () => {
    const newState = this.state.employees.sort((a, b) => a.rank - b.rank)
    this.setState(newState)
  }

  sortByQuirkyness = () => {
    const newState = this.state.employees.sort((a, b) => b.quirkyness - a.quirkyness)
    console.log(newState)
    this.setState(newState)
  }


  render() {
    return (
      <Wrapper>
        <Title defaultSort={this.defaultSort} sortByQuirkyness={this.sortByQuirkyness}/>
        {this.state.employees.map((el) => (
          <Card id={el.id} key={el.id} name={el.name} rank={el.rank} quirkyness={el.quirkyness} />
        ))}
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
