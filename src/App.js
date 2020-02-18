import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
export default class App extends Component {
  state = {
    nombre: "Erick Moreno Hidalgo",
    name: "",
    cel: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  handleChange = e => {
    this.setState({});
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            El estudiante: <strong>{this.state.nombre}</strong>, esta
            aprendiendo React en Tabasco
          </p>
          <form onSubmit={this.handleSubmit}>
            <p>
              <label htmlFor="titulo">Nombre:</label>
              <input
                id="name"
                name="userName"
                placeholder="ingresa el nombre"
                onChange={e => this.setState({ name: e.target.value })}
              />
            </p>
            <p>
              <label htmlFor="titulo">Telefono:</label>
              <input
                id="cel"
                name="userCel"
                placeholder="Ingresa tu numero telefonico"
                onChange={e => this.setState({ cel: e.target.value })}
              />
            </p>
            <button>Enviar</button>
          </form>
        </header>
      </div>
    );
  }
}
