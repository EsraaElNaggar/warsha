import React, { Component } from "react";
import ChangePasswordUser from "./forms/changePasswordUser";
import EditProfileUser from "./editProfileUser";
import AppointmentsUser from "./appointmentsUser";

import ChangePasswordUser from '../../forms/changePasswordUser';
import CustomerProfileDetails from './customer-profile-details';
import UserAppointments from './user-appointments';

class CustomerProfile extends Component {
  state = {
    pathChoice: 0
  };
  //   href={this.state.paths[0]}
  setRenderComponent = choice => {
    this.setState({ pathChoice: choice });
  };
  render() {
    return (
      <React.Fragment>
        <div className="body">
          <div className="content">
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                this.setRenderComponent(1);
              }}
            >
              Profile
            </div>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                this.setRenderComponent(3);
              }}
            >
              My Appointemets
            </div>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                this.setRenderComponent(2);
              }}
            >
              Change Password
            </div>
          </div>
        </div>
        {(() => {
          switch (this.state.pathChoice) {
            case 1:
              return <CustomerProfileDetails></CustomerProfileDetails>;
            case 2:
              return <ChangePasswordUser></ChangePasswordUser>;
            case 3:
              return <UserAppointments></UserAppointments>;
            default:
              return <CustomerProfileDetails></CustomerProfileDetails>;
          }
        })()}
      </React.Fragment>
    );
  }
}

export default CustomerProfile;
