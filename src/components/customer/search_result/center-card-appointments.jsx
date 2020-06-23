import React from 'react';

const CenterCardAppointments = props => {

    return (
        <React.Fragment>
            <div className="d-flex justify-content-between center-card-appoitments">
                <div className="arrow">
                    <button>
                        <i className="fas fa-arrow-left" />
                    </button>
                </div>
                <div className="appointment-board">
                    <p className="booking-day">Today</p>
                    <ul className="appointments-times">
                        <li>Not Available</li>
                    </ul>
                    <button className="booking-btn">Book</button>
                </div>
                <div className="appointment-board">
                    <p className="booking-day">Tomorrow</p>
                    <ul className="appointments-times">
                        <li>12:00 PM</li>
                        <li><del>01:00 PM</del></li>
                        <li>03:00 PM</li>
                        <li><del>05:00 PM</del></li>
                        <li>More</li>
                    </ul>
                    <button className="booking-btn">Book</button>
                </div>
                <div className="appointment-board">
                    <p className="booking-day">Wed 06/5</p>
                    <ul className="appointments-times">
                        <li>12:00 PM</li>
                        <li><del>01:00 PM</del></li>
                        <li>03:00 PM</li>
                        <li><del>05:00 PM</del></li>
                        <li>More</li>
                    </ul>
                    <button className="booking-btn">Book</button>
                </div>
                <div className="arrow">
                    <button>
                        <i className="fas fa-arrow-right" />
                    </button>
                </div>
            </div>
        </React.Fragment>
    );

};

export default CenterCardAppointments;