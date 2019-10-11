import React, { Component } from "react";
import "../App.css";

class GoodName extends Component {
  render() {
    return (
      <div id="input" className="container">
        <div id="input" className="row">
          <div id="input" className="col">
            Sales Associate
          </div>
          <div id="input" className="col">
            <input />
          </div>
          <div id="input" className="col">
            Good Through
          </div>
          <div id="input" className="col">
            <div className="md-form">
              <input/>
              <label>Try me...</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GoodName;
