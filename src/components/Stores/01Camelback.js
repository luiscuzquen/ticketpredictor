import React, { Component } from "react";
import Header from "../Header";
import Input from "../Input";
import Protection from "../Protection";
import Subtotal from "../Subtotal";
import Tax from "../Tax";
import Delivery from "../Delivery";
import Total from "../Total";
import GoodName from "../GoodName";
import Grade from '../test'

class Camelback extends Component {
  state = {};
  render() {
    return (
      <div>
        {/* <Header />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Protection />
        <Subtotal />
        <Tax />
        <Delivery />
        <Total />
        <GoodName /> */}
        <Grade/>
      </div>
    );
  }
}

export default Camelback;
