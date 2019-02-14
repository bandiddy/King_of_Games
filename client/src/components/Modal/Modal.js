import React, { Component } from "react";
import "./Modal.css";
import Login from "../Login";

export default class Modal extends Component {
  state = { show: true };


  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="modal">
        <section className="modal-main">
          {this.state.show &&
            <Login username={this.props.username} email={this.props.email} password={this.props.password} />
          }
          <button onClick={this.hideModal}>close</button>
        </section>
      </div>
    );
  }
}