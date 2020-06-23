import React, { Component } from "react";

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
        <div className="body d-flex justify-content-between">
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
                return <CustomerProfileDetails />;
              case 2:
                return <ChangePasswordUser />;
              case 3:
                return <UserAppointments />;
              default:
                return <CustomerProfileDetails />;
            }
          })()}
        </div>
      </React.Fragment >
    );
  }
}

export default CustomerProfile;
