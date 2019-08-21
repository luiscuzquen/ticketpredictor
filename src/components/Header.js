import React, { Component } from "react";
import Input from './Input';
import './Header.css'

class Header extends Component {
  state = {};
  render() {
    return (
        <div id='input'class="container">
          <div id= 'header' class="row">
          <div id= 'header' class="col">Items</div>
          <div id= 'header' class="col">Regular Price</div>
          <div id= 'header' class="col">Discount Price</div>
          <div id= 'header' class="col">Discount</div>          
        </div>
        <Input/>
        <Input/>
        <Input/>
        <Input/>
        <Input/>
        <Input/>
        <Input/>
      </div>
    );
  }
}

export default Header;