import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './Home.css';
import games from "../../games.json";
import Wrapper from "../Wrapper/Wrapper";
import GameCard from '../GameCard/GameCard';
import TopScoreCard from "../TopScoreCard/TopScoreCard";
import Snake from "../Snake/Snake";
import Breakout from "../Breakout/Breakout";
//import Tower from "../Towerdefense/Towerdefense";
import Racer from "../Racer";
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Modal from '../Modal/Modal';;

export default class Home extends Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        console.log(this.props);
    }
    
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Navbar />
                    <Modal username={this.props.username} email={this.props.email} password={this.props.password} />
                    <Route exact path="/" />
                    <Route
                        path='/breakout'
                        name="Breakout"
                        username = {this.props.username}
                        render={(props) => <Breakout username = {this.props.username}/>}
                    />
                    <Route
                        path='/snake'
                        name="Snake"
                        username = {this.props.username}
                        render={(props) => <Snake username = {this.props.username}/>}
                    />
                    <Route
                        path='/racer'
                        name="Racer"
                        username = {this.props.username}
                        render={(props) => <Racer username = {this.props.username}/>}
                    />
                    <Wrapper>
                        <TopScoreCard />
                        {games.map(game => (
                            <GameCard
                                id={game.id}
                                key={game.id}
                                name={game.name}
                                image={game.image}
                            />
                        ))}
                    </Wrapper>
                    <Footer />
                </div>
            </Router>
        );
    }
}
