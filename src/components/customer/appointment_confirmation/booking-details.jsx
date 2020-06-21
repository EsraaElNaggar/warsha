import React from 'react';

const BookingDetails = props => {
   
    return ( 
        <React.Fragment>
            <div className="booking-details div-border">
                {/* Booking Details Title Start */}
                <p className="booking-details-title">
                    <i className="fas fa-calendar-check pr-2 s-15" />
                    Booking Details
                </p>
                {/* Booking Details Title End */}
                
                <div className="booking-details-info d-flex">
                    <span className="spanKey">
                        Client Name
                    </span>
                    <span>
                        Mona Mohamed
                    </span>
                </div>
                <div className="line" />
                <div className="booking-details-info d-flex">
                    <span className="spanKey">
                    Booking Date
                    </span>
                    <span>
                    05 May . 08:00 PM . Appointment reservation
                    </span>
                </div>
                <div className="line" />
                <div className="booking-details-info d-flex">
                    <span className="spanKey">
                    Waiting Time
                    </span>
                    <span>
                    19 minutes
                    </span>
                </div>
                <div className="line" />
                <div className="booking-details-info d-flex">
                    <span className="spanKey">
                    Center Address
                    </span>
                    <span>
                    50 Mohy Eldin Abo ElEzz Street Same
                    Building As Alfa Labs And Beside KFC.
                    </span>
                </div>
            </div>
        </React.Fragment>
    );
    
};
 
export default BookingDetails;