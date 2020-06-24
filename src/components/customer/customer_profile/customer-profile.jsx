import React, { Component } from "react";

import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

import Nav from './../../core/nav/nav';
import CustomerProfileDetails from './customer-profile-details';
import UserAppointments from './user-appointments';
import ChangePasswordUser from '../../forms/change-user-password';
import Footer from "../../core/footer";

import { getFromStorage } from './../../../_utils/local-storage';


class CustomerProfile extends Component {
  state = {
    pathChoice: 0,
    userData: ""
  };

  // get customer data
  componentDidMount(){
    let userID = getFromStorage('currentID');
  
    axios.get(`http://localhost:3000/users?id=${userID}`)
        .then(res=>{
          const userData = res.data[0];
          this.setState({userData});
        }).catch(err=>{
            if(err.response.status === 404)
            {
                toast(err.response.data, {type:"error"});
            }
            else if(err.response.status === 406)
            {
                this.setState({errors: {password: err.response.data}});
            }
            else toast("Connection Error", {type:"error"});
        });
  }

  //   href={this.state.paths[0]}
  setRenderComponent = choice => {
    this.setState({ pathChoice: choice });
  };

  render() {
    return (
      <React.Fragment>
        {/* NavBar */}
        <Nav className="white"/>

        {/* Profile Container */}
        <div className="body d-flex justify-content-between" style={{height:"100%"}}>
          <div className="content">
            <ul>
              <li className="selected-tab"
                onClick={() => {
                  this.setRenderComponent(1);
                }}
              >
                Profile
              </li>
              <hr className="m-0" />
              <li
                onClick={() => {
                  this.setRenderComponent(3);
                }}
              >
                My Appointemets
              </li>
              <hr className="m-0" />
              <li
                onClick={() => {
                  this.setRenderComponent(2);
                }}
              >
                Change Password
              </li>
            </ul>
          </div>

          {(() => {
            switch (this.state.pathChoice) {
              case 1:
                return <CustomerProfileDetails userData={this.state.userData}/>;
              case 2:
                return <ChangePasswordUser userData={this.state.userData}/>;
              case 3:
                return <UserAppointments userData={this.state.userData}/>;
              default:
                return <CustomerProfileDetails userData={this.state.userData}/>;
            }
          })()}
        </div>

        {/* Footer */}
        <Footer/>
      </React.Fragment >
    );
  }
}

export default CustomerProfile;
