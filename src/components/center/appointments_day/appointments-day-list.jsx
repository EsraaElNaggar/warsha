import React from 'react';

import Appointment from './appointment';

const AppointmentsDayList = props => {
    return ( 
        <React.Fragment>
            <div className="div-border day-appointments-list">
                {/* Client Appointment Start */}
                <Appointment/>
                {/* Client Appointment End */}
            </div>
        </React.Fragment>
    );
};
 
export default AppointmentsDayList;