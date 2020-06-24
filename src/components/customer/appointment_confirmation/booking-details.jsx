import React from 'react';
import { getMonthName } from './../../../_utils/get-month-name';

const BookingDetails = props => {
   const bookingInfo = props.bookingInfo;
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
                        {bookingInfo.customerName}
                    </span>
                </div>
                <div className="line" />
                <div className="booking-details-info d-flex">
                    <span className="spanKey">
                    Booking Date
                    </span>
                    <span>
                    {bookingInfo.day} {getMonthName(new Date(`${bookingInfo.month}/01/2020`))} . {bookingInfo.time} PM . Appointment reservation
                    </span>
                </div>
                <div className="line" />
                <div className="booking-details-info d-flex">
                    <span className="spanKey">
                    Waiting Time
                    </span>
                    <span>
                    {bookingInfo.waitingTime}
                    </span>
                </div>
                <div className="line" />
                <div className="booking-details-info d-flex">
                    <span className="spanKey">
                    Center Address
                    </span>
                    <span>
                        {bookingInfo.centerAddress}
                    </span>
                </div>
            </div>
        </React.Fragment>
    );
    
};
 
export default BookingDetails;