import React, { Component } from "react";
import ReviewsCenter from "./reviewsCenter";
import ShowProfileCenter from "./showProfileCenter";
import CenterDetails from "./customer/center_profile/center-details";

class MainProfileDataCenter extends Component {
  state = {
    displayed: 0,
    CenterDetails: {
      name: "Al Yousr",
      address: "25 yemen st. yemen",
      phone: "15154541",
      onLocationService: true,
      views: 2500,
      bookings: 100
    }
  };
  infoHandler = i => {
    this.setState({ displayed: i });
  };
  handleAppointmentClick=()=>{
    this.props.history.replace("/addappointments");
  }

  render() {
    return (
      <React.Fragment>
        <div className="tab">
          <button className="tablinks active">Profile</button>
          <button className="tablinks" onClick={this.handleAppointmentClick}>Appointments</button>
        </div>
        <div className="center-details">
          <div className="div1-3">
            <div className="name-img">
              {/* <img
                className="center-img"
                src="./imgs//right-section-image.jpg"
              /> */}
              <p>{this.state.CenterDetails.name}</p>
            </div>
            <div className="phone-address">
              <p>{this.state.CenterDetails.address}</p>
              <p>{this.state.CenterDetails.phone}</p>
              {this.state.CenterDetails.onLocationService ? (
                <p>On location service available</p>
              ) : (
                <p>On location service not available</p>
              )}
            </div>
          </div>
          <div className="div2-3">
            <table className="center-table">
              <tbody>
                <tr className="tr-center">
                  <th>Profile views</th>
                  <th>Bookings</th>
                </tr>
                <tr className="tr-center">
                  <td className="td-center">
                    {this.state.CenterDetails.views}
                  </td>
                  <td className="td-center">
                    {this.state.CenterDetails.bookings}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="options">
          <div
            onClick={() => {
              this.infoHandler(1);
            }}
            className="option "
          >
            Center Info
          </div>
          <div
            onClick={() => {
              this.infoHandler(2);
            }}
            className="option active"
          >
            Reviews
          </div>
        </div>
        {(() => {
          switch (this.state.displayed) {
            case 1:
              return <ShowProfileCenter></ShowProfileCenter>;
            case 2:
              return <ReviewsCenter></ReviewsCenter>;
          }
        })()}
      </React.Fragment>
    );
  }
}

export default MainProfileDataCenter;
