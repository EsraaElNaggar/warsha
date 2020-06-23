import React, { Component } from "react";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

import SubNav from "./subnav";
import SubNavAuthonticated from "./subnav-authonticated";

import { getFromStorage } from './../../../_utils/local-storage';

class Nav extends Component {

  state = {
    token: '',
    userData: ""
  };

  // check authontication
  componentDidMount() {
    const token = getFromStorage('authToken');

    if (token) {
      this.setState({ token });
      let userID = getFromStorage('currentID');
  
      axios.get(`http://localhost:3000/users?id=${userID}`)
          .then(res=>{
            const userData = res.data[0];
            this.setState({userData});
          }).catch(err=>{
              // if(err.response.status === 404)
              // {
              //     toast(err.response.data, {type:"error"});
              // }
              // else if(err.response.status === 406)
              // {
              //     this.setState({errors: {password: err.response.data}});
              // }
              // else 
              toast("Connection Error", {type:"error"});
          });
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
            <SubNavAuthonticated
              fName={this.state.userData.fName}
            />
            : <SubNav/>
          }
        </nav>
      </React.Fragment>
    );
  }
}
export default Nav;
