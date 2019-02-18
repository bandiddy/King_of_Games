import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";
import API from "../../utils/API";
import Axios from "axios";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    loginUser(username, password) {
        Axios.post("/api/users/login", {
          username: username,
          password: password
        }).then(function (data) {
          window.location.replace(data);
        }).catch(function (err) {
          console.log(err);
        });
      }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = async event => {
        event.preventDefault();
        this.loginUser(this.state.username, this.state.password);
    }

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="username" bsSize="large">
                        <FormLabel>Username</FormLabel>
                        <FormControl
                            value={this.state.username}
                            onChange={this.handleChange}
                            type="username"
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <FormLabel>Password</FormLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit">
                        Login
          </Button>
                </form>
            </div>
        );
    }
}
