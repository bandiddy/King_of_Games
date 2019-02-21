import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";
import { Route } from 'react-router-dom';
import API from "../../utils/API";
import Home from "../Home/Home";

export default class Login extends Component {



      
    // validateForm() {
    //     return this.props.username.length > 0 && this.props.password.length > 0;
    // }

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.props.handleSubmit}>
                    <FormGroup controlId="username" bsSize="large">
                        <FormLabel>Username</FormLabel>
                        <FormControl
                            value={this.props.username}
                            onChange={this.handleChange}
                            type="username"
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <FormLabel>Password</FormLabel>
                        <FormControl
                            value={this.props.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        // disabled={!this.validateForm()}
                        onClick ={this.props.handler}
                        type="submit">
                        Login
          </Button>
        
                </form>
            </div>
        );
    }
}