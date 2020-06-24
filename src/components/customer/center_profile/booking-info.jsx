import React from 'react';
import BookingForm from './booking-form';
// import AppointmentsContainer from './appointments-container';
import CenterCardAppointments from './../search_result/center-card-appointments';

const BookingInfo = props => {

    const booking = false;
    const center = props.center;
    
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
                            {center.locations[0].city}: {center.locations[0].area}
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
                    // <AppointmentsContainer/>
                    <CenterCardAppointments
                        centerID={center.id}
                        width="100%"
                        handleBooking={props.handleBooking}
                    />
                }
                
            </div>
        </React.Fragment>
    );

};

export default BookingInfo;