import React, { Component } from "react";
import { Link } from "react-router-dom";

import SubNav from "./subnav";
import SubNavAuthonticated from "./subnav-authonticated";

import { getFromStorage } from './../../../_utils/local-storage';

class Nav extends Component {

  state = {
    token: ''
  };

  // check authontication
  componentDidMount() {
    const token = getFromStorage('authToken');

    if (token) {
      this.setState({ token });
    }
  }

  render() {
    return (
      <React.Fragment>
        <nav className={this.props.className}>
          <div className="parts">
            <Link to="/" className="logo">
              <span>W</span>arsha
            </Link>
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/aboutus">About us</Link>
            </div>
            <div>
              <Link to="/contactus">Contact us</Link>
            </div>
          </div>
          {
            this.state.token? 
            <SubNavAuthonticated/>
            : <SubNav/>
          }
        </nav>
      </React.Fragment>
    );
  }
}
export default Nav;
