import React from "react";

class ClassState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
    };
  }

  render() {
    return (
      <>
        <div>
          <h1>Eliminar {this.props.name}</h1>
          <p>
            Por favor, escribe el codigo de seguridad para comprobar que quieres
            eliminar
          </p>

          {this.state.error && <p>Error: el codigo es incorrecto</p>}

          <input placeholder="Codigo de seguridad" />
          <button onClick={() => this.setState({ error: !this.state.error })}>
            Confirmar
          </button>
        </div>
      </>
    );
  }
}

export { ClassState };
