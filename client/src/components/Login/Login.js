import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";
import axios from "axios";


export default class Login extends Component {
    constructor(props) {
        super(props);
    }

    onFieldChange = event => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        this.props.onChange(fieldName, fieldValue);
    }

    handleSubmit = async event => {
        event.preventDefault();
        var userData = {
            username: this.props.username,
            password: this.props.password
        };
        if (!userData.username || !userData.password) {
        return;
        }
        this.loginUser(userData.username, userData.password);
        console.log(this.props.username);
    }
    
    loginUser(u, p) {
        axios.post("/api/users/login", {
            username: u,
            password: p
        }).then(function (data) {
            window.location.replace(data);
        }).catch(function (err) {
            console.log(err);
        });
    }

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="username" bsSize="large">
                        <FormLabel>Username</FormLabel>
                        <FormControl
                            name="username"
                            onChange={this.onFieldChange.bind(this)}
                            type="username"
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <FormLabel>Password</FormLabel>
                        <FormControl
                            name="password"
                            onChange={this.onFieldChange.bind(this)}
                            type="password"
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        type="submit">
                        Login
                    </Button>
                </form>
            </div>
        );
    }
}