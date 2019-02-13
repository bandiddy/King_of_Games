import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Signup from './components/Signup'

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        };
    };


    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Signup username={this.state.username} email={this.state.email} password={this.state.password} />
                    <Footer />
                </div>
            </Router>
        );
    }
}
