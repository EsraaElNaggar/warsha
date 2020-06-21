import React from 'react';
import AppointmentsTableDay from './appointments-table-day';

const AppointmentsTable = props => {
    return ( 
        <React.Fragment>
            <div className="div-border appointments-table-container">
                <table id="appointments-table">
                    <tbody>
                        {/* Appointments Array */}
                        <AppointmentsTableDay/> 
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
};
 
export default AppointmentsTable;