import React, {Component} from "react";

export default class ComponenteFuncao extends Component {
  render () {
    return (
      <h1>{this.props.valor || "VALOR DEFAULT"}</h1>
    );
  }
}