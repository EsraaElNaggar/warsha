import React from 'react';
import BookingForm from './booking-form';
import AppointmentsContainer from './appointments-container';

const BookingInfo = props => {

    const booking = false;
    return (
        <React.Fragment>
            <div className="booking-info b-radius-10 div-border">
                <p className="booking-info-title">Booking Information</p>
                <div>
                    <p className="text-center">Book Appointment</p>
                </div>
                <div className="pt-3 px-4 pb-4 bg-booking-info">
                    <div className="title-subaddress">
                        <i className="fas fa-map-marker-alt" />
                        <span className="subaddress">
                            New Cairo: Southeren Teseen
                    </span>
                    </div>
                    <div>
                        <p className="pl-4">
                            Book now to receive the center’s address details and
                            phone number
                    </p>
                    </div>
                </div>
                {
                    booking === true?
                    // Booking Form
                    <BookingForm/>
                    :
                    // Booking Appointments
                    <AppointmentsContainer/>
                }
                
            </div>
        </React.Fragment>
    );

};

export default BookingInfo;