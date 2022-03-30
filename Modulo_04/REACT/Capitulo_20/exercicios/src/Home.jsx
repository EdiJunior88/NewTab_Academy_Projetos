import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        Página Home
        {/* <a href="/sobre">Ir Sobre</a> */}
        <Link to="/sobre">Sobre</Link>
      </div>
    )
  }
}