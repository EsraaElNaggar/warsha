import React, { Component } from "react";

import { toNumber } from "lodash";

class UserAppointments extends Component {
  state = {
    appointmentsData: [
      {
        centerName: "Shady",
        centerAddress: "15 street",
        appointementDetails: "Details"
      },
      {
        centerName: "hady",
        centerAddress: "15 street",
        appointementDetails: "Details"
      },
      {
        centerName: "Nady",
        centerAddress: "15 street",
        appointementDetails: "Details"
      },
      {
        centerName: "Fady",
        centerAddress: "15 street",
        appointementDetails: "Details"
      }
    ]
  };

  deleteHandler = i => {
    console.log(i);
    let appointments = [...this.state.appointmentsData];
    appointments.splice(i, 1);
    this.setState({ appointmentsData: appointments });
  };

  render() {
    return (
      <React.Fragment>
        <table className="table">
          <tbody>
            <tr className="tr">
              <th className="th">Center Name</th>
              <th className="th">Center Address</th>
              <th className="th">Appointement Details</th>
            </tr>

            {this.state.appointmentsData.map((appointment, i) => (
              <React.Fragment key={i}>
                <tr className="tr">
                  <td className="td">{appointment.centerName}</td>
                  <td className="td">{appointment.centerAddress}</td>
                  <td className="td">
                    <p>{appointment.appointementDetails}</p>
                    <div className="col-flex">
                      <i className="far fa-check-circle" />
                      <button key={i} onClick={() => this.deleteHandler(i)}>
                        <i className="fas fa-window-close" />
                      </button>
                      <button className="button">Report problem</button>
                    </div>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default UserAppointments;
