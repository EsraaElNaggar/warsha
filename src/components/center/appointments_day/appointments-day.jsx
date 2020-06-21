import React, { Component } from 'react';
import AppointmentsStatusNav from './appointments-status-nav';
import AppointmentsDayList from './appointments-day-list';

class AppointmentsDay extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="container m-5 p-5 d-flex justify-content-between">
                    {/* Appointment Status */}
                    <AppointmentsStatusNav/>

                    {/* Day Appointments List Start */}
                    <AppointmentsDayList/>
                    {/* Day Appointments List End */}
                </div>
            </React.Fragment>
        );
    }
}
 
export default AppointmentsDay;