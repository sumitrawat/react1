import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import Counters from "./components/Counters";
import Navbar from "./components/Navbar";
class App extends Component {
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
    tempCount.value += 4;
    tempCounters[index] = tempCount;
    this.setState({ counter: tempCounters });
  };
  //below method works but changes the state without React knowing it
  handleDecrement = count => {
    let tempCounters = [...this.state.counter];
    let index = tempCounters.indexOf(count);
    tempCounters[index].value -= 4;
    this.setState({ counter: tempCounters });
  };
  handleReset = () => {
    let tempCounter = [...this.state.counter];
    let t = tempCounter.map(c => {
      c.value = 0;
      return c;
    });
    console.log(this.state.counter);
    this.setState({ counter: tempCounter });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar total={this.state.counter.length} />
        <Counters
          counter={this.state.counter}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onRemove={this.handleRemove}
        />
      </React.Fragment>
    );
  }
}

export default App;
