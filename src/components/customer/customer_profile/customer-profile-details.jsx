import React, { Component } from "react";

class CustomerProfileDetails extends Component {

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
                <p>{this.props.userData.fName} {this.props.userData.lName}</p>
                <p>{this.props.userData.userEmail}</p>
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
                <p>{this.props.userData.address}</p>
                <p>{this.props.userData.city}</p>
                <p>{this.props.userData.area}</p>
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
                <p>{this.props.userData.carBrand}</p>
                <p>{this.props.userData.carModel}</p>
                <p>{this.props.userData.carYear}</p>
              </div>
            </div>
          </div>
        </div>

      </React.Fragment >
    );
  }
}

export default CustomerProfileDetails;
