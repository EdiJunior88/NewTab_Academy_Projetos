import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class About extends Component {
  render() {
    return (
      <div>
        Página About
        {/* <a href="/home">Home</a> */}
        <Link to="/">HOME</Link>
      </div>
    )
  }
}