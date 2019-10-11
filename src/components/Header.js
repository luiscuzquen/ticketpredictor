import React, { Component } from "react";
import '../App.css'

class Header extends Component {
  state = {};
  render() {
    return (
      <div id="input" className="container">
        <div id="header" className="row">
          <div id="header" className="col">
            Items
          </div>
          <div id="header" className="col">
            Regular Price
          </div>
          <div id="header" className="col">
            Discount
          </div>
          <div id="header" className="col">
            Discount Price
          </div>
        </div>   
      </div>
    );
  }
}

export default Header;
