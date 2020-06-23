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
          <div className="booking-info b-radius-10 div-border">
            <h2 className="booking-info-title">Your Profile</h2>
            <h4>Personal Data</h4>
            <div className="miniLine"></div>
            <div className="user-box details">
              <div className="labels">
                <h5>Full Name :</h5>
                <h5>Email Address :</h5>
              </div>
              <div className="forma">
                <p>{this.state.userData.firstName} {this.state.userData.lastName}</p>
                <p>{this.state.userData.email}</p>
              </div>
            </div>
            <h4>Address Info</h4>
            <div className="miniLine"></div>
            <div className="user-box details">
              <div className="labels">
                <h5>Address :</h5>
                <h5>City :</h5>
                <h5>Area :</h5>
              </div>
              <div className="forma">
                <p>{this.state.userData.address}</p>
                <p>{this.state.userData.city}</p>
                <p>{this.state.userData.area}</p>
              </div>
            </div>
            <h4>Car Details</h4>
            <div className="miniLine"></div>
            <div className="user-box details">
              <div className="labels">
                <h5>Car Make :</h5>
                <h5>Car Model :</h5>
                <h5>Car Year :</h5>
              </div>
              <div className="forma">
                <p>{this.state.userData.carDetails.brand}</p>
                <p>{this.state.userData.carDetails.model}</p>
                <p>{this.state.userData.carDetails.year}</p>
              </div>
            </div>
          </div>
        </div>

      </React.Fragment >
    );
  }
}

export default CustomerProfileDetails;
