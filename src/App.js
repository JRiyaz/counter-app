import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

export default class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 4 },
      { id: 3, value: 3 },
      { id: 4, value: 2 },
      { id: 5, value: 1 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;

    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;

    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const count = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: count });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  render() {
    return (
      <div className="container">
        <NavBar
          totalCount={this.state.counters.filter((c) => c.value > 0).length}
          onReset={this.handleReset}
        />
        <main className="container-fluid">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </div>
    );
  }
}
