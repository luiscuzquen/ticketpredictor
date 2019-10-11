import React, { Component } from "react";
import "../App.css";
import Percent from "./Percent";

class Input extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div className="col">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">$</span>
              <input
                type="number"
                name="num1"/>
              <div className="input-group-append"></div>
            </div>
            </div></div>
            <div>
            <div className="col">
          <Percent/>
          </div>
          </div>
          <div className="col">
            <input type="text" />
          </div>
        </div>
      </div>
    );
  }
}

export default Input;
