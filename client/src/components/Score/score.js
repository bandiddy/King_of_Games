import React, { Component } from "react";
import "./Score.css";
import API from "../../utils/API"

export default class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     error: null,
     isLoaded: false,
     scores: []
    };
   }
  
   componentDidMount() {
    API.getGameScores(this.props.name)
     .then(
      (result) => {
       this.setState({
        isLoaded: true,
        scores: result.data
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
   console.log(this.state.scores);
    return (
      <ul>
        {this.state.scores.map(score => (
         <li key={score.username}>
           {score.username} {score.score}
         </li>
        ))}
      </ul>
    )
  }
}
