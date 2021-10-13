import React, { Component } from "react";
export default class Counterr extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementCount = () => {
    this.setState({
      count: Math.max(this.state.count - 1, 0)
    });
  };

  render() {
    let { count } = this.state;
    return (

          <div className="buttons">
            <button className="buttonPlus" onClick={this.incrementCount}>+</button>
                <span>{count}</span>
            <button className="buttonPlus" onClick={this.decrementCount}>-</button>
          </div>
    );
  }
}