import React from 'react';

const AppointmentsTableDay = props => {
    return ( 
        <React.Fragment>
            <tr className="appointments-day">
                <td>
                    <span>
                    Today
                    </span>
                    <br />
                    7 May
                </td>
                <td>
                    3 Bookings
                </td>
                <td>
                    All Confirmed
                </td>
            </tr>
        </React.Fragment>
    );
};
 
export default AppointmentsTableDay;