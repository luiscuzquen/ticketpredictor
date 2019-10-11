import React, { Component } from "react";
import "../App.css";

class Protection extends Component {
  render() {
    return (
      <div id="input" className="container">
        <div id="input" className="row">
          <div id="input" className="col">
            Protection
          </div>
          <div id="input" className="col">
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div id="input" className="col">
            Protection
          </div>
          <div id="input" className="col">
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Protection;
