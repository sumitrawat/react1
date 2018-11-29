import React, { Component } from "react";
class CounterChild extends Component {
  state = {};
  render() {
    let val = this.props.count.value;
    let badgeClass = "badge badge-";
    if (val === 0) badgeClass += "warning";
    else if (val < 0) badgeClass += "danger";
    else badgeClass += "primary";

    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div className="col">
          <div className={badgeClass}>{this.props.count.value}</div>
        </div>
        <div className="col">
          <button
            className="btn btn-warning"
            onClick={() => {
              this.props.onIncrement(this.props.count);
            }}
          >
            +
          </button>
        </div>
        <div className="col">
          <button
            className="btn btn-warning"
            onClick={() => {
              this.props.onDecrement(this.props.count);
            }}
          >
            -
          </button>
        </div>
        <div className="col">
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.onRemove(this.props.count);
            }}
          >
            Remove
          </button>
        </div>
      </li>
    );
  }
}

export default CounterChild;
