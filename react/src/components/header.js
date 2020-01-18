import React, { Component } from 'react';
import logo from '../Assets/logo.png';

export default class Header extends Component {
  render = () => {
    return (
      <div className="container-fluid navbar-dark">
        <div className="">
          <nav className="navbar navbar-expand-sm header-container">
            <div className="col-4 pl-0">
              <img src={logo} className="App-logoTop" />
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
