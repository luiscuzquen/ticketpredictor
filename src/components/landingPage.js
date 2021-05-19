import React, { Component } from "react";
import '../App.css'

class Landing extends Component {
  state = {};
  render() {
    return (
      <div id="landing">
        <div>
        <img
          id="room"
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt=""
        />
        </div>
        <div>
        <img
          id="App-logo"
          src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt="lost"
        />
        </div>
        <h2 id='body'>
          This App will allow for fast and accurate calculation of a few items.
        </h2>
        <h4> Please Select your Store From the Dropdown Menu to start</h4>
        <h3>Created By Luis Cuzquen</h3>
      </div>
    );
  }
}

export default Landing;
