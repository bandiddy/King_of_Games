import React from "react";
import "./HomeCard.css";
import HomeCardInfo from "../HomeCardInfo"

export default class HomeCard extends React.Component {
    render() {
        return(
            <div className="TScard">
                <HomeCardInfo />
            </div>
        )
    }
}
  
