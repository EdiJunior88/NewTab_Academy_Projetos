import React, { Component } from "react";

export default class Contador extends Component {
  state = {
    numero: this.props.numero
  }


  maisUm = () => {
    console.log(this);
    // this.props.numero++;
    this.setState({numero: this.state.numero + 1})
  }
  
  render() {
    return (
      <div>
        <span>Número: {this.state.numero}</span>
        <button onClick={this.maisUm}>INCREMENTO</button>
      </div>
    )
  }
}