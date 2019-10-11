import React from "react";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
      num1: "",
      num2: "",
    };

    this.handlenum1Change = this.handlenum1Change.bind(this);
    this.handlenum2Change = this.handlenum2Change.bind(this);
  }
  handlenum1Change(evt) {
    console.log(evt.target.value);
    this.setState({ num1: Number(evt.target.value) });
  }
  handlenum1Change = evt => {
    const num1 = Number(evt.target.value);
    this.setState(prevState => ({
      num1,
      result: num1 * prevState.num2/100
    }));
  };

  handlenum2Change = evt => {
    const num2 = Number(evt.target.value);
    this.setState(prevState => ({
      num2,
      result: prevState.num1 * num2/100
    }));
  };

  render() {
    return (
      <form>
        <label>
          <input
            type="number"
            name="num1"
            value={this.state.num1}
            onChange={this.handlenum1Change}
          />
          <input
            type="number"
            name="num2"
            value={this.state.num2}
            onChange={this.handlenum2Change}
          />
          <input type="text" value={this.state.result} readOnly />
        </label>
      </form>
    );
  }
}
 

export default Test