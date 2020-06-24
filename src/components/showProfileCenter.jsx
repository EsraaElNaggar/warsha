import React, { Component } from "react";
import mainProfileDataCenter from "./mainProfileDataCenter";
import { getFromStorage } from '../_utils/local-storage';
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

class ShowProfileCenter extends Component {
  state = {
    centerData: "",
    services: [],
    brands: []
  };

  componentDidMount(){
    let centerID = getFromStorage('currentID');

    axios.get(`http://localhost:3000/centers?id=${centerID}`)
      .then(res => {
        const centerData = res.data[0];
        this.setState({ centerData});
        this.setState({ services: centerData.services});
        this.setState({ brands: centerData.carBrands});

        console.log(res);
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

  render() {
    return (
      <React.Fragment>
        {/* {this.state.centerData.specialities.map(speciality => speciality)} */}
        <h3 className="tabContentTitle part2">Center Info</h3>

        <div className="tabcontent">
          {/* <h3>Profile</h3> */}

          <div className="profile-center-info">
            <h4>About</h4>
            <div className="miniLine"></div>
            <p>{this.state.centerData.about}</p>
          </div>
          {
            this.state.services.length &&
            <div className="profile-center-info">
            <h4>Services</h4>
            <div className="miniLine"></div>
            <div className="specialities">
              {this.state.services.map(service => (
                <span key={service}>{service}</span>
              ))}
            </div>
          </div>
          }
          <div className="profile-center-info">
            <h4>Car Models</h4>
            <div className="miniLine"></div>
            <div className="specialities">
              {this.state.brands.map(carBrand => (
                <span key={carBrand.carBrand}>{carBrand.carBrand}</span>
              ))}
            </div>
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default ShowProfileCenter;
