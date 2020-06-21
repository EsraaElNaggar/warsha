import React, { Component } from 'react';

import CenterDetails from './center-details';
import BookingInfo from './booking-info';

class CenterProfile extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                {/* Center Profile Start */}
                <section className="d-flex justify-content-around center-details-container">
                    {/* Center Details Start */}
                    <CenterDetails/>  {/* send Center Details data */}

                    {/* Booking Info Start */}
                    <BookingInfo/> {/* send booking info data */}
                </section>
                {/* Center Profile End */}
            </React.Fragment>
        );
    }
}
 
export default CenterProfile;