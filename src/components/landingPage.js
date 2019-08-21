import React, { Component } from "react";

class Landing extends Component {
  state = {};
  render() {
    return (
      <div className='landing'>
          <img className='room' src="https://www.la-z-boystore.com/images/purpleRoom.jpg" alt='lost'/>
          <img className='App-logo' src="https://brandguidelines.la-z-boy.com/downloads/logos/home-furnishing/w_outTag/Jpgs-Pngs/4C-lzbHFD.jpg" alt='lost'/>
        <h2>
          This App will allow for fast and accurate calculation of a few items.
        </h2>
        <h4> Please Select your Store From the Dropdown Menu to start</h4>
        <h3>Created By Luis Cuzquen</h3>
        
      </div>
    );
  }
}

export default Landing;
