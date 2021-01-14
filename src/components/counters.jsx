import React, { Component } from "react";
import Counter from "./counter";

export default class Counters extends Component {
  /* state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 4 },
      { id: 3, value: 3 },
      { id: 4, value: 2 },
      { id: 5, value: 1 },
    ],
  }; */

  render() {
    const { onDelete, onDecrement, onIncrement, counters } = this.props;
    return (
      <React.Fragment>
        {counters.map((c) => (
          <Counter
            key={c.id}
            counter={c}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </React.Fragment>
    );
  }
}
