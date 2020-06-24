import React, { Component } from 'react';

import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { getMonthName } from './../../../_utils/get-month-name';
import { getFromStorage } from './../../../_utils/local-storage';

class CenterCardAppointments extends Component {
   
    state={
        appointments:[],
        currentUser: "",
        bookingTime: ""
    };

    componentDidMount(){
        let centerID = Number(this.props.centerID);
  
        let d = new Date();
        axios.get(`http://localhost:3000/appointments?centerId=${centerID}&status=available&year_gte=${d.getFullYear()}&month_gte=${d.getMonth()+1}&day_gte=${d.getDate()}`)
            .then(res=>{
                const appointments = res.data;
                this.setState({appointments});
            }).catch(err=>{
                toast("Connection Error", {type:"error"});
            });

        axios.get(`http://localhost:3000/users?id=${getFromStorage('currentID')}`)
        .then(res=>{
            const currentUser = res.data[0];
            this.setState({currentUser});
        }).catch(err=>{
            toast("Connection Error", {type:"error"});
        });
    }

    handleTime = ({target})=>
    {
        const bookingTime = target.id;
        this.setState({bookingTime})
    };

    handleBookBtn = ()=>{
        const appointmentId = this.state.bookingTime;
        if (appointmentId) {

            const appointment = this.state.appointments.filter(app=> app.id === appointmentId);
            axios.put(`http://localhost:3000/appointments/${Number(appointmentId)}`,
                {
                    clientId: this.state.currentUser.id,
                    customerName: this.state.currentUser.fName+" "+this.state.currentUser.lName,
                    centerId: appointment[0].centerId,
                    centerName: appointment[0].centerName,
                    centerAddress: appointment[0].centerAddress,
                    waitingTime: appointment[0].waitingTime,
                    year: appointment[0].year,
                    month: appointment[0].month,
                    day: appointment[0].day,
                    time: appointment[0].time,
                    status: "Not Confirmed"
                }
            )
            .then(res=>{
                this.props.handleBooking(res.data);
            }).catch(err=>{
                toast("Connection Error", {type:"error"});
            });
        }
        else{
            toast("Choose Time First", {type:"warning"});
        }
    }


    render(){
        
        let d = new Date();
        let day1 =  this.state.appointments.filter( app => Number(app.day) === d.getDate());
        let day2 = this.state.appointments.filter(app=> Number(app.day)===(d.getDate()+1));
        let day3 = this.state.appointments.filter(app=> Number(app.day)===(d.getDate()+2));

        return ( 
            <React.Fragment>
                <ToastContainer/>
                <div className="d-flex justify-content-between center-card-appoitments" style={{width: this.props.width}}>
                            <div className="arrow">
                                <button>
                                <i className="fas fa-arrow-left" />
                                </button>
                            </div>
                            {
                                day1.length !==0?
                                    <div className="appointment-board">
                                    <p className="booking-day">Today</p>
                                    <ul className="appointments-times">
                                    {day1.map(app=>(
                                        <div><a key={app.id} id={app.id} onClick={this.handleTime}>{app.time} PM</a></div>
                                    ))}
                                    </ul>
                                    <button className="booking-btn" onClick={this.handleBookBtn}>Book</button>
                                    </div>
                                :
                                <div className="appointment-board">
                                    <p className="booking-day">Today</p>
                                    <ul className="appointments-times">
                                        <li>Not Available</li>
                                    </ul>
                                    <button className="booking-btn">Book</button>
                                </div>
                            }
                            {
                                day2.length !==0?
                                    <div className="appointment-board">
                                    <p className="booking-day">Tomorrow</p>
                                    <ul className="appointments-times">
                                    {day2.map(app=>(
                                        <div><a key={app.id} id={app.id} onClick={this.handleTime}>{app.time} PM</a></div>
                                    ))}
                                    </ul>
                                    <button className="booking-btn" onClick={this.handleBookBtn}>Book</button>
                                    </div>
                                :
                                <div className="appointment-board">
                                    <p className="booking-day">Tomorrow</p>
                                    <ul className="appointments-times">
                                    <li>Not Available</li>
                                    </ul>
                                    <button className="booking-btn">Book</button>
                                </div>
                            }
                            {
                                day3.length !==0?
                                    <div className="appointment-board">
                                    <p className="booking-day">{day3[0].day} {getMonthName(new Date(`01/${day3[0].month}/2020`))}</p>
                                    <ul className="appointments-times">
                                    {day3.map(app=>(
                                        <div><a key={app.id} id={app.id} onClick={this.handleTime}>{app.time} PM</a></div>
                                    ))}
                                    </ul>
                                    <button className="booking-btn" onClick={this.handleBookBtn}>Book</button>
                                    </div>
                                :
                                <div className="appointment-board">
                                    <p className="booking-day">{d.getDay()+2} {getMonthName(new Date(`${d.getMonth()}/01/2020`))}</p>
                                    <ul className="appointments-times">
                                    <li>Not Available</li>
                                    </ul>
                                    <button className="booking-btn">Book</button>
                                </div>
                            }
                            <div className="arrow">
                                <button>
                                <i className="fas fa-arrow-right" />
                                </button>
                            </div>
                            </div>
            </React.Fragment>
        );
    }    
};

export default CenterCardAppointments;