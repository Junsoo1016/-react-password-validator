import React, { Component } from 'react';
import './Validator.css';

class Validator extends Component {
  render() {
    return (
      <form>
        <h1>Sign Up</h1>
        <input onChange={this.props.handleChange} type="text" name="username" placeholder="username" />
        <input onChange={this.props.handleChange} type="password" name="password" placeholder="password" />
        <input onChange={this.props.handleChange} type="password" name="confirmPassword" placeholder="confirm password" />
        <input onClick={this.props.handleValidate} type="submit" value="Submit" />
      </form>
    );
  }
}

export default Validator;
