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
        <div>
          <div className="tabcontent">
            <h3>Profile</h3>

            <div className="center-info">
              <div>About</div>
              <br />
              <div>{this.state.centerData.about}</div>
            </div>
            <div className="center-info">
              <div>Speciality</div>
              <br />
              <div className="specialities">
                {this.state.centerData.specialities.map(speciality => (
                  <React.Fragment>
                    <div className="specialities">
                      <div>{speciality}</div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="center-info">
              <div>Car Models</div>
              <br />
              <div className="specialities">
                {this.state.centerData.carModels.map(carModel => (
                  <React.Fragment>
                    <div className="specialities">
                      <div>{carModel}</div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ShowProfileCenter;
