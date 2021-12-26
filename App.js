import "./App.css";
import React, { Component } from "react";
import User from "./components/User/User";
import Particles from "react-particles-js";
import Result from "./components/Result/Result";
import symptoms from "./symptoms";
import Loading from "./components/Loading/Loading";

// Next steps: error boundry, symptoms dropdown, sort accuracy, display all possible outcomes authentication, medicine timer

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      gen: "",
      year: "",
      sym: "",
      id: [],
      formFilled: false
    };
  }

  onValueChange = event => {
    this.setState({
      sym: event.target.value
    });
  };
  onNameChange = event => {
    this.setState({
      name: event.target.value
    });
  };
  onGenderChange = event => {
    this.setState({
      gen: event.target.value
    });
  };
  onYearChange = event => {
    this.setState({
      year: event.target.value
    });
  };

  onFormSubmit = () => {
    const b = [];
    const a = symptoms.filter(symptom => symptom.Name.toLowerCase().includes(this.state.sym.toLowerCase()));
    a.forEach(item => {
      b.push(item.ID);
    });
    // console.log(a);
    // console.log(b);
    this.setState(
      {
        id: b
      },
      () => {
        console.log(this.state);
      }
    );
    this.setState({
      formFilled: true
    });
  };

  render() {
    return (
      <div className="App">
        <Particles className="particles" />
        <User onValueChange={this.onValueChange} onFormSubmit={this.onFormSubmit} onYearChange={this.onYearChange} onGenderChange={this.onGenderChange} onNameChange={this.onNameChange} />
        {this.state.formFilled ? (
          <div>
            {" "}
            <Result name={this.state.name} symId={this.state.id[0]} gender={this.state.gen.toLowerCase()} year={this.state.year} />{" "}
          </div>
        ) : (
          <div>
            <Loading />
          </div>
        )}
      </div>
    );
  }
}

export default App;
