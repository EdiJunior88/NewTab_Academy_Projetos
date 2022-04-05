import React, {Component} from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        Página About
        {/* <a href="/">Ir HOME</a> */}
        <Link to="/">HOME</Link>
      </div>
    )
  }
}