import React, { Component } from "react";
import "../App.css";

class Percent extends Component {
  render() {
    return (
      <div>
        <div className="form-group">
          <select className="form-control" id="dropdown" type="number">
            <option value='1'>NA</option>
            <option value='5'>5%</option>
            <option value='10'>10%</option>
            <option value='15'>15%</option>
            <option value='20'>20%</option>
            <option value='25'>25%</option>
          </select>
          </div>
      </div>
    );
  }
}

export default Percent;
