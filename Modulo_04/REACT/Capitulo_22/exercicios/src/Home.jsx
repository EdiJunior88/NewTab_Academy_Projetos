import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Home extends Component {
  state = {
  data: []
}

  async componentDidMount() {       
    const api = 'https://api.airtable.com/v0/appYtQmjCS4p0n2dY/tbll2X6iiQTi0jKCf?api_key=keyfV0AwOq2Pctb5Y&filterByFormula=(AND({Email}=%22academy@cocreare.com.br%22%20,%20{Senha}=%22123456%22))'
  
    const response = await fetch(api)
    console.log("res ", response);     

    const body = await response.json();
    console.log("body ", body['records'][0]); 
            
    this.setState({data:  body['records'][0]})
  }

  render() {
    return (
      <div>
        Página HOME
        <span>{JSON.stringify(this.state.data)}</span>
        {/* <a href="/sobre">Ir Sobre</a> */}
        <Link to="/sobre">Sobre</Link>
      </div>
    );
  }
}
