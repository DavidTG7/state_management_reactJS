import { Component } from "react";

class InputChangeClass extends Component {
  constructor(props) {
    super(props)

    
    this.state = {
      inputValue: ""
    }
  }
  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({inputValue: e.target.value})
  }
  
  render() {
    return(
      <>
        <h1>Input Change Class Component</h1>
        <input
          placeholder="UserName"
          type="text"
          onChange={this.handleChange.bind(this)}
        />
        <p>{this.state.inputValue.length > 0 ? this.state.inputValue : "User Name"}</p>
      </>
    )
  }
}

export { InputChangeClass }