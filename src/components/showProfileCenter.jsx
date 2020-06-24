import React, { Component } from "react";
import mainProfileDataCenter from "./mainProfileDataCenter";

class ShowProfileCenter extends Component {
  state = {
    centerData: {
      about: "cghvhhbjhbjknm",
      specialities: ["elec", "mechanic", "welding"],
      carModels: ["chevy", "BMW", "audi"]
    }
  };
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
          <div className="profile-center-info">
            <h4>Speciality</h4>
            <div className="miniLine"></div>
            <div className="specialities">
              {this.state.centerData.specialities.map(speciality => (
                <span key={speciality}>{speciality}</span>
              ))}
            </div>
          </div>
          <div className="profile-center-info">
            <h4>Car Models</h4>
            <div className="miniLine"></div>
            <div className="specialities">
              {this.state.centerData.carModels.map(carModel => (
                <span key={carModel}>{carModel}</span>
              ))}
            </div>
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default ShowProfileCenter;
