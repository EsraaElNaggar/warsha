import React, { Component } from "react";

import SubNavAuthonticated from "./subnav-authonticated";
import SubNav from "./subnav";

import { getFromStorage } from './../../../_utils/local-storage';
import { NavLink } from "react-router-dom";

class Nav extends Component {

  state={
    token: ''
  }

  componentDidMount(){
    const token = getFromStorage('authToken');

    if (token) {
      this.setState({token});
    }
  }
  
  render() {
    return (
      <React.Fragment>
        <nav className={this.props.className}>
          <div className="parts">
            <h1 className="logo">
              <span>W</span>arsha
            </h1>
            <div>
              <a href="hh">Home</a>
            </div>
            <div>
              <NavLink to="aboutus">About us</NavLink>
            </div>
            <div>
              <a href="hh">Contact us</a>
            </div>
          </div>
          {
            this.token? 
            <SubNavAuthonticated/>
            : <SubNav/>
          }
        </nav>
      </React.Fragment>
    );
  }
}
export default Nav;
