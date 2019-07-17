import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick () {
    this.props.handleClick(this.props.idx);
  }
  render() {
    const numToWords = ["one", "two", "three", "four", "five", "six"];
    let classString = `Die fas fa-dice-${numToWords[this.props.val-1]} fa-5x`;
    if (this.props.locked) classString += " Die-locked";
    if (this.props.isRolling && !this.props.locked) classString += " Die-rolling";
    return (
      <i
        className={classString}
        disabled={this.props.disabled}
        onClick={this.handleClick}
      >
      </i>
    );
  }
}

export default Die;
