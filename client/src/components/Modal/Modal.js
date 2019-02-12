import React, { Component } from "react";
// import ReactDOM from "react-dom";
import "./Modal.css";
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
       
        <div className= "modal"> 
          <section className="modal-main">
            <Login />
            <button onClick={this.hideModal}>close</button>
          </section>
        </div>
      </main>
    );
  }
}
export default Modal