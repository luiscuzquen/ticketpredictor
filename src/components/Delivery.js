import React, { Component } from "react";
import "../App.css";

class Delivery extends Component {
  render() {
    return (
      <div id="input" className="container">
        <div id="input" className="row">
          <div id="input" className="col">
            Delivery
          </div>
          <div id="input" className="col">
            $199
          </div>
          <div id="input" className="col">
            Delivery
          </div>
          <div id="input" className="col">
            <div className="form-group">
              <select className="form-control" id="sel1">
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
