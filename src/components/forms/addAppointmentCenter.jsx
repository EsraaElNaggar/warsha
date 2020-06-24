import React, { Component } from "react";
import { useForm } from "react-hook-form";
import axios from "axios"
import CenterAppointments from "../center/center_appointments_List/center-appointments";
import AppointmentsDay from "../center/appointments_day/appointments-day";

class AddAppointmentCenter extends Component {
  state = {
    date: new Date(),
    time: "",
    status: ""
  }
  checked = e => {
    this.setState({status:e.target.checked?e.target.value:""})
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
  onReturn = () =>{
    this.props.history.replace("/centermainprofile");
  }
  onSubmit = e => {
    const centerID = localStorage.getItem("currentID");
    axios.get(`http://localhost:3000/appointments`).then(res=>{
      axios.post(`http://localhost:3000/appointments`,{
        "clientId": "",
        "centerId": centerID,
        "year": this.state.date.getFullYear().toString(),
        "month": (this.state.date.getMonth()+1).toString(),
        "day": this.state.date.getDate().toString(),
        "time": this.state.time,
        "status": "Available"})
        .then(res => {
          console.log("res")
        })
    })
   
  };

  render() {
    return (
      <React.Fragment>
        <div className="body">
          <div className="login-box pass">
            <h2>Add Appointment</h2>
            <form onSubmit={this.onSubmit}>
              <div className="alignment">

                
                <br />
                <div className="alignment">
                  <label>Appointment Date</label>
                  <input type="date"  name="date" onChange={this.changeDate} />
                </div>
                <div>
                  <label>Appointment Time</label>
                  <select name="time" onChange={this.changeTime}>
                    <option value="">Select Time</option>
                    <option value="10:00">10 am</option>
                    <option value="12:00">12 pm</option>
                    <option value="14:00">2 pm</option>
                    <option value="16:00">4 pm</option>
                    <option value="18:00">6 pm</option>
                  </select>

                </div>
              </div>
              <div className="save">
                <input type="submit" value="Submit" />
              </div>
            </form>
            <button onClick={this.onReturn}>Return to Profile</button>
          </div>
        </div>
        <AppointmentsDay/>
      </React.Fragment>
    );
  }
};

export default AddAppointmentCenter;
