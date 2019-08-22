import React, { Component } from "react";
import "../App.css";

class Tax extends Component {
  render() {
    return (
      <div id="input" class="container">
        <div id="input" class="row">
          <div id="input" class="col">
            Tax
          </div>
          <div id="input" class="col">
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div id="input" class="col">
            Tax
          </div>
          <div id="input" class="col">
            <input
              type="text"
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Tax;
