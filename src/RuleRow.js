import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    const isUndefined = this.props.score === undefined;
    return (
      <tr className={isUndefined
                    ? "RuleRow RuleRow-active"
                    : "RuleRow RuleRow-disabled"}
          onClick={isUndefined ? this.props.doScore : null}>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{isUndefined
                    ? this.props.description
                    : this.props.score}</td>
      </tr>
    )
  }
}

export default RuleRow;
