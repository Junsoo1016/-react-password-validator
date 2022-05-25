import React, { Component } from 'react';
import Validator from './Validator';

class App extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      valid: 0,
      alert: ['Valid', 'Password do not match']
    }
  }
handleChange = (e) => {
  this.setState({
    [e.target.name] : e.target.value
  })
}

handleValidate = (e) => {
  e.preventDefault()
  if (this.state.password === this.state.confirmPassword) { 
    this.setState({ 
      valid: true
    })
  } else { 
    this.setState({
      valid: false
    })
  }
}

  render() {
    return (
      <div>
      <Validator handleChange={this.handleChange} handleValidate={this.handleValidate}/>
      {this.state.valid ? <p>Valid!</p> : <p>Invalid!</p>}
      </div>
    );
  }
}

export default App;
