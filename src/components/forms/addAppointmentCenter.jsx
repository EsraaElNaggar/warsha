import React, { Component } from "react";
import { useForm } from "react-hook-form";
import axios from "axios"
import CenterTab from "../centerTab";

class AddAppointmentCenter extends Component {
  state = {
    date: new Date(),
    time: "",
    status: ""
  }
  checked = e => {
    this.setState({ status: e.target.checked ? e.target.value : "" })
  };
  changeDate = e => {
    this.setState({ date: new Date(e.target.value) });
  }
  changeTime = e => {
    this.setState({ time: e.target.value })
  }
  // const onChangeHandler = e => {
  //   setTime(e.target.value);
  // };
  // {
  //   "year": "2020",
  //   "month": "6",
  //   "day": "30",
  //   "time": "02:00",
  //   "centerId": "3"
  // }
  onSubmit = e => {
    const centerID = localStorage.getItem("currentID");
    axios.get(`http://localhost:3000/appointments`).then(res => {
      let id = ++res.data[res.data.length - 1].id;
      axios.post(`http://localhost:3000/appointments`, {
        "id": id.toString(),
        "clientId": "",
        "centerId": centerID,
        "year": this.state.date.getFullYear().toString(),
        "month": (this.state.date.getMonth() + 1).toString(),
        "day": this.state.date.getDate().toString(),
        "time": this.state.time,
        "status": "Available"
      })
        .then(res => {
          console.log("res")
        })
    })

  };

  render() {
    return (
      <React.Fragment>
        <CenterTab history={this.props.history} />
        <div className="appBody">
          <div className="login-box pass">
            <h2>Add Appointment</h2>
            <form className="form" onSubmit={this.onSubmit}>

              <div className="alignment">
                <label>Appointment Date</label>
                <input className="form-field" type="date" name="date" onChange={this.changeDate} />
              </div>
              <div className="alignment">
                <label>Appointment Time</label>
                <select className="form-field" name="time" onChange={this.changeTime}>
                  <option value="">Select Time</option>
                  <option value="10:00">10 am</option>
                  <option value="12:00">12 pm</option>
                  <option value="14:00">2 pm</option>
                  <option value="16:00">4 pm</option>
                  <option value="18:00">6 pm</option>
                </select>

              </div>

              <div className="Save">
                <input className="appSave" type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
};

export default AddAppointmentCenter;
