import React from "react";

class ClassState extends React.Component {
  render() {
    return(
      <div>
        <h1>Eliminar {this.props.name}</h1>
        <p>Por favor, escribe el código de seguridad.</p>
        <input placeholder="Código de seguridad"/>
        <button>Comprobar</button>
      </div>
    )
  }
}

export { ClassState }