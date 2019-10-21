import React, { Component } from "react";
import Master from "../master";

class Mesa extends Component {
  state = {};
  render() {
    return (
      <div>
        <div id="input" class="container">
          <div id="input" class="row">
            <div id="input" class="col">
              <h3>Mesa Store</h3>
            </div>
          </div>
        </div>
        <Master />
      </div>
    );
  }
}

export default Mesa;
