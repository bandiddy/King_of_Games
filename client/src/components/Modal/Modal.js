import React, { Component } from "react";
import "./Modal.css";
import Login from "../Login";

export default class Modal extends Component {
  state = { show: true };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="modal">
        <section className="modal-main">
          <Login />
          <button onClick={this.hideModal}>close</button>
        </section>
      </div>
    );
  }
}
