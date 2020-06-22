import React, { Component } from "react";

class CustomerProfileDetails extends Component {
  state = {
    userData: {
      firstName: "Ahmed",
      lastName: "Maged",
      email: "am@gmail.com",
      address: "25 yemen street, yemen",
      city: "cairo",
      area: "nasr city",
      carDetails: {
        brand: "chevrolet",
        model: "aveo",
        year: "2017"
      }
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="login-box top-space">
          <h2>Your Profile</h2>

          <div className="user-box">
            <label>{this.state.userData.firstName}</label>
          </div>
          <div className="user-box">
            <label>{this.state.userData.lastName}</label>
          </div>
          <div className="user-box">
            <label>{this.state.userData.email}</label>
          </div>
          <div className="user-box">
            <label>{this.state.userData.address}</label>
          </div>
          <div className="position">
            <label>{this.state.userData.city}</label>
            <label>{this.state.userData.area}</label>
          </div>

          <div className="user-box">
            <label>Car details</label>

            <div className="position">
              <label>{this.state.userData.carDetails.brand}</label>
              <br />

              <label>{this.state.userData.carDetails.model}</label>
              <br />

              <label>{this.state.userData.carDetails.year}</label>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CustomerProfileDetails;
