import React, { Component } from "react";
import "./Score.css";
import API from "../../utils/API"

export default class Score extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
    
      componentDidMount() {
        API.getGameScores(this.props.name)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.items
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    
    render() {
        return (
            <ul>
                {this.state.items.map(item => (
                  <li key={item.username}>
                      {item.username} {item.score}
                  </li>
                ))}
            </ul>
        )
    }
}