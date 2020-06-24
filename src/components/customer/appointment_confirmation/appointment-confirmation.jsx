import React, { Component } from 'react';
import ConfirmationCard from './confirmation-card';
import BookingDetails from './booking-details';
import BookingThanks from './booking-thanks';

class AppointmentConfirmation extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
               {/* Appointment Confirmation Start */}
                <section className=" appointment-confirmation">
                    <div className="firstPart d-flex justify-content-between container">
                        {/* Confirmation Card */}
                        <ConfirmationCard
                            bookingInfo={this.props.bookingInfo}
                        /> 
                        
                        {/* Booking Details */}
                        <BookingDetails
                            bookingInfo={this.props.bookingInfo}
                        />
                    </div>
                    
                    {/* Thanks For Booking Start */}
                    <BookingThanks/>
                </section>
                {/* Appointment Confirmation End */}
            </React.Fragment>
        );
    }
}
 
export default AppointmentConfirmation;