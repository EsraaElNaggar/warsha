import React from 'react';

import Appointment from './appointment';

const AppointmentsDayList = props => {
    let {list} =props
    list = list.map(l=>{
        return(
            <Appointment key={l.id} appointment={l} />
        )
    })
    return ( 
        <React.Fragment>
            <div className="div-border day-appointments-list">
                {/* Client Appointment Start */}
                    {list}
                {/* Client Appointment End */}
            </div>
        </React.Fragment>
    );
};
 
export default AppointmentsDayList;