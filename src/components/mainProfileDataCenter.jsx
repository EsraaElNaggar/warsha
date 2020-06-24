import React, { Component } from "react";
import ReviewsCenter from "./reviewsCenter";
import ShowProfileCenter from "./showProfileCenter";
import CenterDetails from "./customer/center_profile/center-details";
import Footer from "./core/footer";
import CenterTab from "./centerTab";

class MainProfileDataCenter extends Component {
  state = {
    displayed: 0,
    CenterDetails: {
      name: "Al Yousr",
      address: "25 yemen st. yemen",
      phone: "15154541",
      onLocationService: true,
      views: 2500,
      bookings: 100,

    },
    toggle1: false,
    toggle2: true
  };

  infoHandler = i => {
    this.setState({ displayed: i, toggle1: !this.state.toggle1, toggle2: !this.state.toggle2 });

  };
  // handleAppointmentClick = () => {
  //   this.props.history.replace("/addappointments");
  // }

  render() {
    return (
      <React.Fragment>
        <CenterTab
          history={this.props.history}
        />
        {/* <div className="tab">
          <button className="tabLinks active">Profile</button>
          <button className="tabLinks" onClick={this.handleAppointmentClick}>Appointments</button>
        </div> */}
        <div className="tabContent">
          <h3 className="tabContentTitle">Profile</h3>
          <div className="profile-center-details">
            <div className="div1-3">
              <div className="name-img">
                <img
                  className="center-img"
                  src="/assets/mechanistic.jpg"
                />
                <p className="profile-center-name">Center <span>{this.state.CenterDetails.name}</span></p>
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
            <div onClick={() => { this.infoHandler(1); }} className={this.state.toggle1 ? "option" : "option active"}>
              Center Info
            </div>
            <div onClick={() => { this.infoHandler(2); }} className={this.state.toggle2 ? "option" : "option active"}>
              Reviews
            </div>
          </div>
          {(() => {
            switch (this.state.displayed) {
              case 1:
                return <ShowProfileCenter />;
              case 2:
                return <ReviewsCenter />;
              default:
                return <ShowProfileCenter />;
            }
          })()}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default MainProfileDataCenter;
