import React, { Component } from "react";
import ReactDOM from "react-dom";
import  "./modal.css";
import Login from "../Login";

class Modal extends Component {
  state = { show: true };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>
        <h1>React Modal</h1>
        <Modal show={this.state.show} handleClose={this.hideModal}>
            <Login />
        </Modal>
        <button type="button" onClick={this.hideModal}>
          Close
        </button>
      </main>
    );
  }
}
export default Modal