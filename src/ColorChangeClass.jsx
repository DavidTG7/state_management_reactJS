import React from "react";

const DEFAULT_COLOR = "hsl(150, 100%, 50%)"

const randomColorGenerator = () => {
  const hue = Math.floor(Math.random() * 365)

  return `hsl(${hue}, 100%, 50%)`
}

class ColorChangeClass extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      newColor: DEFAULT_COLOR
    }
  }

  render() {
    return (
      <>
        <h1>Color Change Class Component</h1>
        <div style={{...colorBoxStyles, background: this.state.newColor}} />
        <p>{this.state.newColor}</p>
        <button onClick={() => this.setState({ newColor: randomColorGenerator() })}>New Random Color</button>
      </>
    )
  }
}

export { ColorChangeClass }

const colorBoxStyles = {
  width: "15rem",
  aspectRatio: "1",
  transition: ".6s",
  borderRadius: "15px",
  margin: "auto",
  marginBottom: "1rem"
}