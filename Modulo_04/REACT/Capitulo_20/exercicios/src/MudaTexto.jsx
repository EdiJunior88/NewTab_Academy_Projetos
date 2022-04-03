import React, { Component } from "react";

class Texto extends Component {
  state = {
    variavel: "ABC"
  }

  render () {
    var changeText = ($event) => {
      console.log($event.target.value);
      this.setState({variavel: $event.target.value});
    }
    
    return (
      <div className="App">
        <header className="App-header">
          <input 
            type="text" 
            value={this.state.variavel} 
            onChange={changeText} 
          />
        </header>
      </div>
    )
  }
}

export default Texto;