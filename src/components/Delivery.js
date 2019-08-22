import React, { Component } from "react";
import "../App.css";

class Delivery extends Component {
  render() {
    return (
      <div id="input" class="container">
        <div id="input" class="row">
          <div id="input" class="col">
            Delivery
          </div>
          <div id="input" class="col">
            $199
          </div>
          <div id="input" class="col">
            Delivery
          </div>
          <div id="input" class="col">
            <div class="form-group">
              <select class="form-control" id="sel1">
                <option>NA Pick/up</option>
                <option>$79</option>
                <option>$99</option>
                <option>$125</option>
                <option>$199</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Delivery;
