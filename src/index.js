import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

class LoggingButton extends React.Component {
  handleClick = () => {
    console.log("this is:", this);
    //this가 handle Click 냉에서 바인딩 되도록 함.
  };

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    //콜백에서 'this'가 작동하려면 바인딩을 해주어야 함.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

ReactDOM.render(<LoggingButton />, document.getElementById("root"));
reportWebVitals();
