import React, { Component } from "react";

import SubNavAuthonticated from "./subnav-authonticated";
import SubNav from "./subnav";

import { getFromStorage } from './../../../_utils/local-storage';
import { Link } from "react-router-dom";

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
