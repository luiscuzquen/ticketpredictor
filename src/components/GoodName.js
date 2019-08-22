import React, { Component } from "react";
import "../App.css";

class GoodName extends Component {
  render() {
    return (
      <div id="input" class="container">
        <div id="input" class="row">
          <div id="input" class="col">
            Sales Associate
          </div>
          <div id="input" class="col">
            <input />
          </div>
          <div id="input" class="col">
            Good Through
          </div>
          <div id="input" class="col">
            <div class="md-form">
              <input
                placeholder="Selected date"
                type="text"
                id="date-picker-example"
                class="form-control datepicker"
              />
              <label for="date-picker-example">Try me...</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GoodName;
