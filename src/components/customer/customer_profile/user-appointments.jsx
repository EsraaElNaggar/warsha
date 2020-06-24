import React, { Component } from "react";

import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

// import { toNumber } from "lodash";
import { getMonthName } from './../../../_utils/get-month-name';

class UserAppointments extends Component {
  state = {
    appointments: []
  };

  // get customer appointments
  componentDidMount(){
    let userID = this.props.userData.id;
    axios.get(`http://localhost:3000/appointments?clientId=${userID}&_sort=year,month,day,time&order=desc,desc,desc,desc`)
        .then(res=>{
            const appointments = res.data;
            this.setState({appointments});
        }).catch(err=>{
            toast("Connection Error", {type:"error"});
        });
  }

  deleteHandler = i => {
    console.log(i);
    let appointments = [...this.state.appointmentsData];
    appointments.splice(i, 1);
    this.setState({ appointmentsData: appointments });
  };

  render() {
    console.log(this.state.appointments);
    return (
      <React.Fragment>
        <table className="table login-box top-space">
          <thead>
            <tr className="tr">
              <th className="th">Center Name</th>
              <th className="th">Center Address</th>
              <th className="th">Appointement Details</th>
              <th className="th"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.appointments.map((appointment, i) => (
              <React.Fragment key={i}>
                <tr className="tr">
                  <td className="td">{appointment.centerName}</td>
                  <td className="td">{appointment.centerAddress}</td>
                  <td className="td appDet">
                  <p>
                    {appointment.day} {getMonthName(new Date(`${appointment.month}/01/2020`))} {appointment.year}, {appointment.time}
                  </p>
                    <p>
                        Name: {this.props.userData.fName}
                    </p>
                  </td>
                  <td>
                    <div className="col-flex">
                        {/* <i className="fas fa-check-square" /> */}
                        <button className="appDel" key={i} onClick={() => this.deleteHandler(i)}>
                          <i className="fas fa-window-close" />
                        </button>
                        <button className="appRep">Report problem</button>
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
