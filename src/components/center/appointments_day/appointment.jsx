import React from 'react';

const Appointment = props => {
    return ( 
        <React.Fragment>
            <div className="d-flex justify-content-between client-appointment">
                {/* Appointment Cliend Card Start */}
                <div className="appointment-client-card">
                    <div className="appointment-client-details">
                    <span>
                        Mona Mohamed
                    </span>
                    <span>
                        12:00 PM
                    </span>
                    </div>
                    <div className="client-card-btns d-flex">
                    <button>
                        {/* <i class="fas fa-user-check"></i> Checked In Icon */}
                        <i className="fas fa-user-cog" />
                        Check In
                    </button>
                    <button>
                        {/* <i class="fas fa-eye-slash"></i> Not Showed Icon */}
                        <i className="fas fa-eye" />
                        No Show
                    </button>
                    </div>
                </div>
                {/* Appointment Cliend Card End */}
                <button>
                    Confirm Booking
                </button>
            </div>
        </React.Fragment>
    );
};
 
export default Appointment;