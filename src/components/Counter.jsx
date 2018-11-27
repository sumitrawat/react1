import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    title: "My App",
    count: 0,
    imgUrl: "https://picsum.photos/200",
    tags: ["tags 1", "tags 2", "tags 2"]
  };

  render() {
    return (
      <div className="container">
        <div className="header">{this.state.title}</div>
        <div className="card">
          <div className="card-header">
            {"Counter"}:{" "}
            <span className={this.renderClass()}>{this.formatCount()}</span>
          </div>
          <div className="card-body container">
            <div className="row">
              <div className="col">
                <img src={this.state.imgUrl} alt="" />
              </div>
            </div>
            <div className="row">
              <div className="col">{this.renderTags()}</div>
            </div>
            <div className="row">
              <div className="col">
                <button onIncrement={this.handleClick}>+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  handleIncrement() {
    console.log(this);
  }
  renderClass() {
    let counterClass = "badge badge-";
    counterClass += this.state.count === 0 ? "warning" : "primary";
    return counterClass;
  }

  formatCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }

  renderTags() {
    if (this.state.tags.length === 0)
      return <p className="badge badge-warning">No tags to display!!</p>;
    else
      return (
        <ul className="list-group">
          {this.state.tags.map(tag => (
            <li className="list-group-item" key={tag}>
              {tag}
            </li>
          ))}
        </ul>
      );
  }
}
