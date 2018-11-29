import React, { Component } from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import CounterChild from "./CounterChild";
class Counters extends Component {
  state = {
    counter: [
      { id: 1, value: 2 },
      { id: 2, value: 3 },
      { id: 3, value: 6 },
      { id: 4, value: 4 }
    ]
  };
  handleRemove = count => {
    this.setState({
      counter: this.state.counter.filter(c => c.id !== count.id)
    });
  };
  handleIncrement = count => {
    /// .... clones the array
    const tempCounters = [...this.state.counter];
    //this increments the array but not the source
    //  tempCounters.push({ id: 7, value: 23 });
    //  console.log(this.state.counter);
    const index = tempCounters.indexOf(count);
    //array is clone not the objects in array, in order to have a clone of the object
    const tempCount = { ...tempCounters[index] };
    tempCount.value++;
    tempCounters[index] = tempCount;
    this.setState({ counter: tempCounters });
  };
  //below method works but changes the state without React knowing it
  handleDecrement = count => {
    let tempCounters = [...this.state.counter];
    let index = tempCounters.indexOf(count);
    tempCounters[index].value--;
    this.setState({ counter: tempCounters });
  };
  handleReset = () => {
    let tempCounter = [...this.state.counter];
    let t = tempCounter.map(c => {
      c.value = 0;
      return c;
    });
    console.log(this.state.counter);
    // this.setState({ counter: tempCounter });
  };
  render() {
    if (this.state.counter.length > 0) {
      return (
        <main role="main" className="container">
          <div className="row col">
            <div className="card">
              <div className="card-header">Counters</div>
              <div className="card-body">
                <button onClick={this.handleReset} className="btn btn-warning">
                  Reset
                </button>
                <ul className="list-group">
                  {this.state.counter.map(c => {
                    return (
                      <CounterChild
                        key={c.id}
                        onRemove={this.handleRemove}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        count={c}
                      />
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </main>
      );
    } else return <div className="alert alert-danger">No More item left!!</div>;
  }
}
export default Counters;
