import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import ReviewsCenter from "./reviewsCenter";
import ShowProfileCenter from "./showProfileCenter";
import CenterDetails from "./customer/center_profile/center-details";
import Footer from "./core/footer";
import CenterTab from "./centerTab";
import { getFromStorage } from '../_utils/local-storage';


class MainProfileDataCenter extends Component {
  state = {
    displayed: 0,
    CenterDetails: [],
    toggle1: false,
    toggle2: true
  };

  componentDidMount(){
    let centerID = getFromStorage('currentID');

    axios.get(`http://localhost:3000/centers?id=${centerID}`)
      .then(res => {
        const centerData = res.data[0];
        this.setState({ CenterDetails:  centerData});
      }).catch(err => {
        // if (err.response.status === 404) {
        //   toast(err.response.data, { type: "error" });
        // }
        // else if (err.response.status === 406) {
        //   this.setState({ errors: { password: err.response.data } });
        // }
        // else 
        toast("Connection Error", { type: "error" });
      });
  }

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
                <p className="profile-center-name">Center <span>{this.state.CenterDetails.centerName}</span></p>
              </div>
              <div className="phone-address">
                <p>{this.state.CenterDetails.mainLocation}</p>
                <p>{this.state.CenterDetails.telephone}</p>
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
                    {this.state.CenterDetails.noOfViews}
                  </td>
                  <td className="td-center">
                    {this.state.CenterDetails.noOfVisitors}
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
