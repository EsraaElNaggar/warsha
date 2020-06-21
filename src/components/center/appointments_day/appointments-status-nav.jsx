import React from 'react';

const AppointmentsStatusNav = props => {
    return ( 
        <React.Fragment>
            <div className="appointments-status div-border">
                <ul>
                    <li className="selected-tab">All</li>
                    <hr className="m-0" />
                    <li><i className="fas fa-check-square" /> Confirmed</li>
                    <hr className="m-0" />
                    <li><i className="fas fa-times-circle" /> Not Confirmed</li>
                    <hr className="m-0" />
                    <li><i className="fas fa-user-check" /> Checked In</li>
                    <hr className="m-0" />
                    <li><i className="fas fa-eye-slash" /> No Show</li>
                    <hr className="m-0" />
                    <li><i className="fas fa-exclamation-circle" /> No Action</li>
                </ul>
            </div>
        </React.Fragment>
    );
};
 
export default AppointmentsStatusNav;