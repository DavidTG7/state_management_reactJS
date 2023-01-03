import React from "react";

class CounterClass extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
    }
  }

  
  render() {
    return (
      <>
        <h1>Counter Class Component</h1>
        <p>{this.state.counter}</p>
        <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
        <button onClick={() => this.setState({counter: this.state.counter + 1})}>+</button>
      </>
    )
  }
}

export { CounterClass }