import React, { Component } from "react";

export class counter extends Component {
  //   state = {
  //     value: this.props.counter.value,
  //   };
  render() {
    return (
      <div className="my-2">
        <span className={this.renderClasses()}>{this.formatCount()}</span>

        <button
          type="button"
          //   onClick={this.handleIncrement}
          className="btn btn-info btn-sm mx-2"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>

        <button
          type="button"
          //   onClick={this.handleDecrement}
          className="btn btn-secondary btn-sm mx-2"
          onClick={() => this.props.onDecrement(this.props.counter)}
        >
          Decrement
        </button>

        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  //   handleIncrement = () => {
  //     this.setState({ value: this.state.value + 1 });
  //   };

  //   handleDecrement = () => {
  //     this.setState({ value: this.state.value - 1 });
  //   };

  renderClasses() {
    // const { value: count } = this.props.counter.value;
    const count = this.props.counter.value;
    let classes = "badge p-2 m-2 badge-";

    if (count === 0) classes += "warning";
    else if (count < 0) classes += "danger";
    else classes += "primary";
    return classes;
  }

  formatCount() {
    // const { value } = this.state.counter.value;
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default counter;
