import React, { Component } from "react";
import "../App.css";
import Percent from "./Percent";

class Input extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col">
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
          </div>
          <div class="col">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">$</span>
              </div>
              <input
                type="text"
                class="form-control"
                aria-label="Amount (to the nearest dollar)"
              />
              <div class="input-group-append">
              </div>
            </div>
          </div>
          <div class="col">
            <Percent />
          </div>
          <div class="col">
            750
          </div>
        </div>
      </div>
    );
  }
}

export default Input;
