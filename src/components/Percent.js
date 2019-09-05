import React, { Component } from "react";
import "../App.css";

class Percent extends Component {
  render() {
    return (
      <div>
        <div class="form-group">
          <select class="form-control" id="dropdown" type="number"
            name="num2"
            value={this.state.num2}
            onChange={this.handlenum2Change}>
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
