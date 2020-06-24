import React, { Component } from 'react';
import AppointmentsStatusNav from './appointments-status-nav';
import AppointmentsDayList from './appointments-day-list';
import axios from 'axios';

class AppointmentsDay extends Component {
    state = {
        currentState: "",
        displayedList: [],
        fullList: [],
    }
    componentDidMount() {
        if(this.state.fullList.length == 0){
            let id = localStorage.getItem("currentID").split('"')[1]
            console.log(id)
            axios.get(`http://localhost:3000/appointments?centerId=${id}`)
            .then(res=>{
                this.setState({fullList:res.data})
                this.setState({displayedList:res.data})
            })
        }
    }
    changeState(newState){
        this.setState({currentState:newState},
            ()=>{
                let newFiltered = this.setState.fullList;
                newFiltered = newFiltered.filter(s=>s.status==this.state.currentState.toLowerCase())
                this.setState({displayedList:newFiltered})
            })
    }
    render() {
        return (
            <React.Fragment>
                <div className="container m-5 p-5 d-flex justify-content-between">
                    {/* Appointment Status */}
                    <AppointmentsStatusNav />

                    {/* Day Appointments List Start */}
                    <AppointmentsDayList list={this.state.displayedList}/>
                    {/* Day Appointments List End */}
                </div>
            </React.Fragment>
        );
    }
}

export default AppointmentsDay;