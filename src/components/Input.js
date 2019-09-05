import React, { Component } from "react";
import "../App.css";
import Percent from "./Percent";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
      num1: "",
      num2: ""
    };

    this.handlenum1Change = this.handlenum1Change.bind(this);
    this.handlenum2Change = this.handlenum2Change.bind(this);
  }
  handlenum1Change(evt) {
    console.log(evt.target.value);
    this.setState({ num1: Number(evt.target.value) });
  }
  handlenum1Change = evt => {
    const num1 = Number(evt.target.value);
    this.setState(prevState => ({
      num1,
      result: num1 - (num1 * prevState.num2) / 100
    }));
  };

  handlenum2Change = evt => {
    const num2 = Number(evt.target.value);
    this.setState(prevState => ({
      num2,
      result: prevState.num1 - (prevState.num1 * num2) / 100
    }));
  };

  getNum2 = evt => {
    var num2 = document.getElementById("list").value;
  };

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col">
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div class="col">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">$</span>
              </div>
              <input
                type="number"
                name="num1"
                value={this.state.num1}
                onChange={this.handlenum1Change}
              />
              <div class="input-group-append"></div>
            </div>
          </div>
          <div class="col">
            <div>
              <div class="form-group">
                <select
                  class="form-control"
                  id="dropdown"
                  type="number"
                  name="num2"
                  value={this.state.num2}
                  onChange={this.handlenum2Change}
                >
                  <option value="0">NA</option>
                  <option value="5">5%</option>
                  <option value="10">10%</option>
                  <option value="15">15%</option>
                  <option value="20">20%</option>
                  <option value="25">25%</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col">
            <input type="text" value={this.state.result} readOnly />
          </div>
        </div>
      </div>
    );
  }
}

export default Input;
