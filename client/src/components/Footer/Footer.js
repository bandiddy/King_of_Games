import React, { Component } from 'react';
import "./Footer.css";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <span class="p-3 mb-2 text-white">Philly Cheese Steaks</span>
        <img src="https://www.blimpie.com/assets/images/product/phillycheesesteak.png"  alt="philly cheese steak" class="img-rounded"></img>
      </footer>
    )
  }
}

