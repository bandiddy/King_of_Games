import React, { Component } from "react";
import "./Login.css";

class Login extends Component {

   handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    
    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${this.state.username}`);
    this.setState({
      username: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Hello {this.state.username} 
        </p>
        <form className="form">
          <input
            value={this.state.username}
            ref = { node => {this.state.password = node}}
            name="username"
            onChange={this.handleInputChange}
            type="text"
            placeholder="username"
          />
          <input
            value={this.state.password}
            ref ={ node => {this.state.password = node}}
            name="password"
            onChange={this.handleInputChange}
            type="text"
            placeholder="password"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
