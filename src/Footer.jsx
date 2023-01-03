import React from "react";

class Footer extends React.Component {
  
  render() {
    return (
      <footer style={footerStyle}>Daveloped by {this.props.name} {this.props.year}</footer>
    )
  }
}

export { Footer }

const footerStyle = {
  marginTop: "10rem"
}