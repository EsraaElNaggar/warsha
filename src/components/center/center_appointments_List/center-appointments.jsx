import React, { Component } from 'react';
import AppointmentsTable from './appointments-table';

class CenterAppointments extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className="container m-5 p-5 d-flex justify-content-between">

                    {/* Appointments Tabs */}
                    <div className="appointments-tabs div-border">
                        <ul>
                            <li className="selected-tab">Current
                            Appointments
                        </li>
                            <hr className="m-0" />
                            <li>Previous
                            Appointments
                        </li>
                        </ul>
                    </div>

                    {/* Appoitntments Table */}
                    <AppointmentsTable />
                </div>
            </React.Fragment>
        );
    }
}

export default CenterAppointments;