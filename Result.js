import React, { Component } from "react";
import token from "../../token";
import "./Result.css";

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disName: "",
      accuracy: "",
      field: ""
    };
  }

  url = `https://healthservice.priaid.ch/diagnosis?token=${token}&language=en-gb&symptoms=[${this.props.symId}]&gender=${this.props.gender}&year_of_birth=${this.props.year}`;

  componentDidMount() {
    fetch(this.url)
      .then(response => response.json())
      .then(res => {
        this.setState({
          disName: res[0].Issue.Name,
          accuracy: res[0].Issue.Accuracy,
          field: res[0].Specialisation[0].Name
        });
        console.log(this.state);
      });
  }

  componentDidUpdate() {
    fetch(this.url)
      .then(response => response.json())
      .then(res => {
        this.setState({
          disName: res[0].Issue.Name,
          accuracy: res[0].Issue.Accuracy,
          field: res[0].Specialisation[0].Name
        });
        console.log(this.state);
      });
  }

  render() {
    return (
      <>
        <article className="center mw5 mw6-ns br3 hidden ba b--white-10 mv4">
          <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">{this.state.disName.toUpperCase()}</h1>
          <div className="pa3 bt b--black-10 shadow-5">
            <p className="f6 f5-ns lh-copy measure">
              Welcome {this.props.name}, for a {this.props.gender} born in {this.props.year}. The most likely issue could be {this.state.disName}
            </p>
            <p>Concerned Doctor Field : {this.state.field}</p>
            <label htmlFor="file">Likelihood: </label>
            <progress id="file" value={this.state.accuracy} max="100"></progress>
          </div>
        </article>
      </>
    );
  }
}

export default Result;
