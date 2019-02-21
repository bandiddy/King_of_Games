import React, { Component } from "react";
import {
    FormGroup,
    FormControl,
    FormLabel,
    Button
} from "react-bootstrap";
import "./Signup.css";
import API from "../../utils/API";

export default class Signup extends Component {


    // validateForm() {
    //     return this.props.username.length > 0 && this.props.password.length > 0 && this.props.email.length > 0;
    // }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = async event => {
        event.preventDefault();
        var userData = {
            email: this.props.email,
            username: this.props.username,
            password: this.props.password,
        };
        API.createUser(userData);
    }

    render() {
        return (
            <div className="Signup">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="email" bsSize="large">
                        <FormLabel>Email</FormLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.props.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="username" bsSize="large">
                        <FormLabel>Username</FormLabel>
                        <FormControl
                            autoFocus
                            type="username"
                            value={this.props.username}
                            onChange={this.handleChange}
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
                        type="submit">
                        Signup
                    </Button>
                </form>
            </div>
        );
    }
}