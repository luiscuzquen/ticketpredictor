import React, { Component } from "react";
import "../App.css";

class Percent extends Component {
  state = {};
  render() {
    return (
      <div>
        <div class="form-group">
          <select class="form-control" id="sel1">
            <option>NA</option>
            <option>5%</option>
            <option>10%</option>
            <option>15%</option>
            <option>20%</option>
            <option>25%</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Percent;
