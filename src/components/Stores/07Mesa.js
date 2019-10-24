import React, { Component } from "react";

class Mesa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rPrice1: 0,
      dPrice1: 0,
      percent1: 0,
      amountOff1: 0,
      dPrice2: 0,
      rPrice2: 0,
      percent2: 0,
      amountOff2: 0,
      dPrice3: 0,
      rPrice3: 0,
      percent3: 0,
      amountOff3: 0,
      dPrice4: 0,
      rPrice4: 0,
      percent4: 0,
      amountOff4: 0,
      dPrice5: 0,
      rPrice5: 0,
      percent5: 0,
      amountOff5: 0,
      dPrice6: 0,
      rPrice6: 0,
      percent6: 0,
      amountOff6: 0,
      dPrice7: 0,
      rPrice7: 0,
      percent7: 0,
      amountOff7: 0,
      rProtection: 0,
      rSubtotal: 0,
      rDelivery: 199,
      tax: 0.0803,
      Store: "Mesa",
      dProtection: 0,
      dDelivery: 0,
      dSubtotal: 0
    };

    this.Price1Change = this.price1Change.bind(this);
    this.percent1Change = this.percent1Change.bind(this);
    this.amountOff1Change = this.amountOff1Change.bind(this);
    this.Price2Change = this.price2Change.bind(this);
    this.percent2Change = this.percent2Change.bind(this);
    this.amountOff2Change = this.amountOff2Change.bind(this);
    this.Price3Change = this.price3Change.bind(this);
    this.percent3Change = this.percent3Change.bind(this);
    this.amountOff3Change = this.amountOff3Change.bind(this);
    this.Price4Change = this.price4Change.bind(this);
    this.percent4Change = this.percent4Change.bind(this);
    this.amountOff4Change = this.amountOff4Change.bind(this);
    this.Price5Change = this.price5Change.bind(this);
    this.percent5Change = this.percent5Change.bind(this);
    this.amountOff5Change = this.amountOff5Change.bind(this);
    this.Price6Change = this.price6Change.bind(this);
    this.percent6Change = this.percent6Change.bind(this);
    this.amountOff6Change = this.amountOff6Change.bind(this);
    this.Price7Change = this.price7Change.bind(this);
    this.percent7Change = this.percent7Change.bind(this);
    this.amountOff7Change = this.amountOff7Change.bind(this);
    this.rProtectionChange = this.rProtectionChange.bind(this);
    this.dProtectionChange = this.dProtectionChange.bind(this);
    this.dDeliveryChange = this.dDeliveryChange.bind(this);
  }

  price1Change = evt => {
    const rPrice1 = Number(evt.target.value);
    this.setState(prevState => ({
      rPrice1,
      dPrice1:
        rPrice1 - (rPrice1 * prevState.percent1) / 100 - prevState.amountOff1
    }));
  };

  percent1Change = evt => {
    const percent1 = Number(evt.target.value);
    this.setState(prevState => ({
      percent1,
      dPrice1:
        prevState.rPrice1 -
        (prevState.rPrice1 * percent1) / 100 -
        prevState.amountOff1
    }));
  };

  amountOff1Change = evt => {
    const amountOff1 = Number(evt.target.value);
    this.setState(prevState => ({
      amountOff1,
      dPrice1:
        prevState.rPrice1 -
        (prevState.rPrice1 * prevState.percent1) / 100 -
        amountOff1
    }));
  };

  price2Change = evt => {
    const rPrice2 = Number(evt.target.value);
    this.setState(prevState => ({
      rPrice2,
      dPrice2:
        rPrice2 - (rPrice2 * prevState.percent2) / 100 - prevState.amountOff2
    }));
  };

  percent2Change = evt => {
    const percent2 = Number(evt.target.value);
    this.setState(prevState => ({
      percent2,
      dPrice2:
        prevState.rPrice2 -
        (prevState.rPrice2 * percent2) / 100 -
        prevState.amountOff2
    }));
  };

  amountOff2Change = evt => {
    const amountOff2 = Number(evt.target.value);
    this.setState(prevState => ({
      amountOff2,
      dPrice2:
        prevState.rPrice2 -
        (prevState.rPrice2 * prevState.percent2) / 100 -
        amountOff2
    }));
  };

  price3Change = evt => {
    const rPrice3 = Number(evt.target.value);
    this.setState(prevState => ({
      rPrice3,
      dPrice3:
        rPrice3 - (rPrice3 * prevState.percent3) / 100 - prevState.amountOff3
    }));
  };

  percent3Change = evt => {
    const percent3 = Number(evt.target.value);
    this.setState(prevState => ({
      percent3,
      dPrice3:
        prevState.rPrice3 -
        (prevState.rPrice3 * percent3) / 100 -
        prevState.amountOff3
    }));
  };

  amountOff3Change = evt => {
    const amountOff3 = Number(evt.target.value);
    this.setState(prevState => ({
      amountOff3,
      dPrice3:
        prevState.rPrice3 -
        (prevState.rPrice3 * prevState.percent3) / 100 -
        amountOff3
    }));
  };

  price4Change = evt => {
    const rPrice4 = Number(evt.target.value);
    this.setState(prevState => ({
      rPrice4,
      dPrice4:
        rPrice4 - (rPrice4 * prevState.percent4) / 100 - prevState.amountOff4
    }));
  };

  percent4Change = evt => {
    const percent4 = Number(evt.target.value);
    this.setState(prevState => ({
      percent4,
      dPrice4:
        prevState.rPrice4 -
        (prevState.rPrice4 * percent4) / 100 -
        prevState.amountOff4
    }));
  };

  amountOff4Change = evt => {
    const amountOff4 = Number(evt.target.value);
    this.setState(prevState => ({
      amountOff4,
      dPrice4:
        prevState.rPrice4 -
        (prevState.rPrice4 * prevState.percent4) / 100 -
        amountOff4
    }));
  };

  price5Change = evt => {
    const rPrice5 = Number(evt.target.value);
    this.setState(prevState => ({
      rPrice5,
      dPrice5:
        rPrice5 - (rPrice5 * prevState.percent5) / 100 - prevState.amountOff5
    }));
  };

  percent5Change = evt => {
    const percent5 = Number(evt.target.value);
    this.setState(prevState => ({
      percent5,
      dPrice5:
        prevState.rPrice5 -
        (prevState.rPrice5 * percent5) / 100 -
        prevState.amountOff5
    }));
  };

  amountOff5Change = evt => {
    const amountOff5 = Number(evt.target.value);
    this.setState(prevState => ({
      amountOff5,
      dPrice5:
        prevState.rPrice5 -
        (prevState.rPrice1 * prevState.percent5) / 100 -
        amountOff5
    }));
  };

  price6Change = evt => {
    const rPrice6 = Number(evt.target.value);
    this.setState(prevState => ({
      rPrice6,
      dPrice6:
        rPrice6 - (rPrice6 * prevState.percent6) / 100 - prevState.amountOff6
    }));
  };

  percent6Change = evt => {
    const percent6 = Number(evt.target.value);
    this.setState(prevState => ({
      percent6,
      dPrice6:
        prevState.rPrice6 -
        (prevState.rPrice6 * percent6) / 100 -
        prevState.amountOff6
    }));
  };

  amountOff6Change = evt => {
    const amountOff6 = Number(evt.target.value);
    this.setState(prevState => ({
      amountOff6,
      dPrice6:
        prevState.rPrice6 -
        (prevState.rPrice6 * prevState.percent6) / 100 -
        amountOff6
    }));
  };

  price7Change = evt => {
    const rPrice7 = Number(evt.target.value);
    this.setState(prevState => ({
      rPrice7,
      dPrice7:
        rPrice7 - (rPrice7 * prevState.percent7) / 100 - prevState.amountOff7
    }));
  };

  percent7Change = evt => {
    const percent7 = Number(evt.target.value);
    this.setState(prevState => ({
      percent7,
      dPrice7:
        prevState.rPrice7 -
        (prevState.rPrice7 * percent7) / 100 -
        prevState.amountOff1
    }));
  };

  amountOff7Change = evt => {
    const amountOff7 = Number(evt.target.value);
    this.setState(prevState => ({
      amountOff7,
      dPrice7:
        prevState.rPrice7 -
        (prevState.rPrice1 * prevState.percent7) / 100 -
        amountOff7
    }));
  };

  rProtectionChange = evt => {
    const rProtection = Number(evt.target.value);
    this.setState(prevState => ({
      rProtection
    }));
  };

  dProtectionChange = evt => {
    const dProtection = Number(evt.target.value);
    this.setState(prevState => ({
      dProtection
    }));
  };
  dDeliveryChange = evt => {
    const dDelivery = Number(evt.target.value);
    this.setState(prevState => ({
      dDelivery
    }));
  };

  render() {
    return (
      <div>
        <div id="input" class="container">
          <div id="input" class="row">
            <div id="input" class="col">
              <h5>{this.state.Store} Store</h5>
            </div>
          </div>
        </div>
        <div>
          <div id="input" class="container">
            <div id="input" class="row">
              <div id="input" class="col-1">
                Client
              </div>
              <div id="input" class="col-5">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                />
              </div>
              <div id="input" class="col-3">
                Sales Associate
              </div>
              <div id="input" class="col-3">
                <div class="md-form">
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="input" class="container">
          <div id="header" class="row">
            <div id="header" class="col-3">
              Items
            </div>
            <div id="header" class="col">
              Regular Price
            </div>
            <div id="header" class="col-2">
              Discount %
            </div>
            <div id="header" class="col-2">
              Discount $
            </div>
            <div id="header" class="col">
              Discount Price
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-3">
              <div class="input-group mb-3">
                <input type="text" class="form-control"></input>
              </div>
            </div>
            <div class="col">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <input
                  type="number"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                  onChange={this.Price1Change}
                />
              </div>
            </div>
            <div class="col-2">
              <div class="input-group">
                <input
                  onChange={this.percent1Change}
                  type="number"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
            </div>
            <div class="col-2">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <input
                  onChange={this.amountOff1Change}
                  type="number"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                />
              </div>
            </div>
            <div class="col">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <input
                  type="number"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                  value={this.state.dPrice1.toFixed(2)}
                />
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-3">
              <div class="input-group mb-3">
                <input type="text" class="form-control"></input>
              </div>
            </div>
            <div class="col">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <input
                  type="number"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                  onChange={this.Price2Change}
                />
              </div>
            </div>
            <div class="col-2">
              <div class="input-group">
                <input
                  onChange={this.percent2Change}
                  type="number"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
            </div>
            <div class="col-2">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <input
                  onChange={this.amountOff2Change}
                  type="number"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                />
              </div>
            </div>
            <div class="col">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <input
                  type="number"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                  value={this.state.dPrice2.toFixed(2)}
                />
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-3">
              <div class="input-group mb-3">
                <input type="text" class="form-control"></input>
              </div>
            </div>
            <div class="col">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <input
                  type="number"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                  onChange={this.Price3Change}
                />
              </div>
            </div>
            <div class="col-2">
              <div class="input-group">
                <input
                  onChange={this.percent3Change}
                  type="number"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
            </div>
            <div class="col-2">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <input
                  onChange={this.amountOff3Change}
                  type="number"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                />
              </div>
            </div>
            <div class="col">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <input
                  type="number"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                  value={this.state.dPrice3.toFixed(2)}
                />
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-3">
              <div class="input-group mb-3">
                <input type="text" class="form-control"></input>
              </div>
            </div>
            <div class="col">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <input
                  type="number"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                  onChange={this.Price4Change}
                />
              </div>
            </div>
            <div class="col-2">
              <div class="input-group">
                <input
                  onChange={this.percent4Change}
                  type="number"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
            </div>
            <div class="col-2">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <input
                  onChange={this.amountOff4Change}
                  type="number"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                />
              </div>
            </div>
            <div class="col">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <input
                  type="number"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                  value={this.state.dPrice4.toFixed(2)}
                />
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-3">
              <div class="input-group mb-3">
                <input type="text" class="form-control"></input>
              </div>
            </div>
            <div class="col">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <input
                  type="number"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                  onChange={this.Price5Change}
                />
              </div>
            </div>
            <div class="col-2">
              <div class="input-group">
                <input
                  onChange={this.percent5Change}
                  type="number"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
            </div>
            <div class="col-2">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <input
                  onChange={this.amountOff5Change}
                  type="number"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                />
              </div>
            </div>
            <div class="col">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <input
                  type="number"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                  value={this.state.dPrice5.toFixed(2)}
                />
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-3">
              <div class="input-group mb-3">
                <input type="text" class="form-control"></input>
              </div>
            </div>
            <div class="col">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <input
                  type="number"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                  onChange={this.Price6Change}
                />
              </div>
            </div>
            <div class="col-2">
              <div class="input-group">
                <input
                  onChange={this.percent6Change}
                  type="number"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
            </div>
            <div class="col-2">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <input
                  onChange={this.amountOff6Change}
                  type="number"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                />
              </div>
            </div>
            <div class="col">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <input
                  type="number"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                  value={this.state.dPrice6.toFixed(2)}
                />
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-3">
              <div class="input-group mb-3">
                <input type="text" class="form-control"></input>
              </div>
            </div>
            <div class="col">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <input
                  type="number"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                  onChange={this.Price7Change}
                />
              </div>
            </div>
            <div class="col-2">
              <div class="input-group">
                <input
                  onChange={this.percent7Change}
                  type="number"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
            </div>
            <div class="col-2">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <input
                  onChange={this.amountOff7Change}
                  type="number"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                />
              </div>
            </div>
            <div class="col">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <input
                  type="number"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                  value={this.state.dPrice7.toFixed(2)}
                />
              </div>
            </div>
          </div>
        </div>

        <div id="input" class="container">
          <div id="input" class="row">
            <div id="input" class="col">
              Protection
            </div>
            <div class="col">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <input
                  type="number"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  onChange={this.rProtectionChange}
                />
              </div>
            </div>
            <div id="input" class="col">
              Protection
            </div>
            <div class="col">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <input
                  type="number"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  onChange={this.dProtectionChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div id="input" class="container">
          <div id="input" class="row">
            <div id="input" class="col">
              Subtotal
            </div>
            <div class="col">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <input
                  type="number"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  value={(
                    this.state.rPrice1 +
                    this.state.rPrice2 +
                    this.state.rPrice3 +
                    this.state.rPrice4 +
                    this.state.rPrice5 +
                    this.state.rPrice6 +
                    this.state.rPrice7 +
                    this.state.rProtection
                  ).toFixed(2)}
                />
              </div>
            </div>
            <div id="input" class="col">
              Subtotal
            </div>
            <div class="col">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <input
                  type="number"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  value={(
                    this.state.dPrice1 +
                    this.state.dPrice2 +
                    this.state.dPrice3 +
                    this.state.dPrice4 +
                    this.state.dPrice5 +
                    this.state.dPrice6 +
                    this.state.dPrice7 +
                    this.state.dProtection
                  ).toFixed(2)}
                />
              </div>
            </div>
          </div>
        </div>
        <div id="input" class="container">
          <div id="input" class="row">
            <div id="input" class="col">
              Tax
            </div>
            <div class="col">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <input
                  type="number"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  value={(
                    (this.state.rPrice1 +
                      this.state.rPrice2 +
                      this.state.rPrice3 +
                      this.state.rPrice4 +
                      this.state.rPrice5 +
                      this.state.rPrice6 +
                      this.state.rPrice7 +
                      this.state.rProtection) *
                    this.state.tax
                  ).toFixed(2)}
                />
              </div>
            </div>
            <div id="input" class="col">
              Tax
            </div>
            <div class="col">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  value={(
                    (this.state.dPrice1 +
                      this.state.dPrice2 +
                      this.state.dPrice3 +
                      this.state.dPrice4 +
                      this.state.dPrice5 +
                      this.state.dPrice6 +
                      this.state.dPrice7 +
                      this.state.dProtection) *
                    this.state.tax
                  ).toFixed(2)}
                />
              </div>
            </div>
          </div>
        </div>
        <div id="input" class="container">
          <div id="input" class="row">
            <div id="input" class="col">
              Delivery
            </div>
            <div class="col">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  value={this.state.rDelivery}
                ></input>
              </div>
            </div>
            <div id="input" class="col">
              Delivery
            </div>
            <div class="col">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <select
                  class="form-control"
                  id="sel1"
                  onChange={this.dDeliveryChange}
                >
                  <option value="0">NA Pick/up</option>
                  <option value="79">79</option>
                  <option value="99">99</option>
                  <option value="125">125</option>
                  <option value="199">199</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div id="input" class="container">
          <div id="input" class="row">
            <div id="input" class="col">
              Total
            </div>
            <div class="col">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <input
                  type="number"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  value={(
                    (this.state.rPrice1 +
                      this.state.rPrice2 +
                      this.state.rPrice3 +
                      this.state.rPrice4 +
                      this.state.rPrice5 +
                      this.state.rPrice6 +
                      this.state.rPrice7 +
                      this.state.rProtection) *
                      this.state.tax +
                    (this.state.rPrice1 +
                      this.state.rPrice2 +
                      this.state.rPrice3 +
                      this.state.rPrice4 +
                      this.state.rPrice5 +
                      this.state.rPrice6 +
                      this.state.rPrice7 +
                      this.state.rProtection) +
                    this.state.rDelivery
                  ).toFixed(2)}
                />
              </div>
            </div>
            <div id="input" class="col">
              Total
            </div>
            <div class="col">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <input
                  type="number"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  value={(
                    (this.state.dPrice1 +
                      this.state.dPrice2 +
                      this.state.dPrice3 +
                      this.state.dPrice4 +
                      this.state.dPrice5 +
                      this.state.dPrice6 +
                      this.state.dPrice7 +
                      this.state.dProtection) *
                      this.state.tax +
                    (this.state.dPrice1 +
                      this.state.dPrice2 +
                      this.state.dPrice3 +
                      this.state.dPrice4 +
                      this.state.dPrice5 +
                      this.state.dPrice6 +
                      this.state.dPrice7 +
                      this.state.dProtection) +
                    this.state.dDelivery
                  ).toFixed(2)}
                />
              </div>
            </div>{" "}
          </div>
        </div>
        <div>
          <h1 id="Savings">
            You Saved{" "}
            {(
              (this.state.rPrice1 +
                this.state.rPrice2 +
                this.state.rPrice3 +
                this.state.rPrice4 +
                this.state.rPrice5 +
                this.state.rPrice6 +
                this.state.rPrice7 +
                this.state.rProtection) *
                this.state.tax +
              (this.state.rPrice1 +
                this.state.rPrice2 +
                this.state.rPrice3 +
                this.state.rPrice4 +
                this.state.rPrice5 +
                this.state.rPrice6 +
                this.state.rPrice7 +
                this.state.rProtection) +
              this.state.rDelivery -
              ((this.state.dPrice1 +
                this.state.dPrice2 +
                this.state.dPrice3 +
                this.state.dPrice4 +
                this.state.dPrice5 +
                this.state.dPrice6 +
                this.state.dPrice7 +
                this.state.dProtection) *
                this.state.tax +
                (this.state.dPrice1 +
                  this.state.dPrice2 +
                  this.state.dPrice3 +
                  this.state.dPrice4 +
                  this.state.dPrice5 +
                  this.state.dPrice6 +
                  this.state.dPrice7 +
                  this.state.dProtection) +
                this.state.dDelivery)
            ).toFixed(2)}
            !!!!!
          </h1>
        </div>
        <div id="input" class="container">
          <div id="input" class="row">
            <div id="input" class="col">
              Sale Quote Expiration Date
            </div>
            <div id="input" class="col">
              <input
                type="date"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mesa;
