import React, { Component } from 'react';

import CenterDetails from './center-details';
import BookingInfo from './booking-info';
import Nav from './../../core/nav/nav';
import Footer from './../../core/footer';
import AppointmentForm from './../../forms/appointment-form';

class CenterProfile extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>

                {/* Navbar */}
                <Nav className="white"/>

                {/* Center Profile Start */}
                <section className="d-flex justify-content-around center-details-container">
                    {/* Center Details Start */}
                    <CenterDetails
                        center={this.props.center}
                    />  

                    {/* Booking Info Start */}
                    <BookingInfo
                        center={this.props.center}
                    /> 
                </section>
                {/* Center Profile End */}

                {/* Footer */}
                <Footer/>
            </React.Fragment>
        );
    }
}
 
export default CenterProfile;