import React, { Component } from 'react';

class AppointmentsContainer extends Component {
    state = {}
    render() {
        return (
            <div className="booking-appointments">
                <p className="booking-appointments-title">
                    Choose Your Appointment
                        </p>
                <div className="border-y d-flex justify-content-between appoitments-content">
                    <div className="arrow">
                        <button>
                            <i className="fas fa-arrow-left"></i>
                        </button>
                    </div>
                    <div className="appointment-board">
                        <p className="booking-day">Today</p>
                        <div className="appointments-times">
                            <div><a href="#">Not Available</a></div>
                        </div>
                        <button className="booking-btn">Book</button>
                    </div>
                    <div className="appointment-board">
                        <p className="booking-day">Tomorrow</p>
                        <div className="appointments-times">
                            <div><a href="#">12:00 PM</a></div>
                            <div><a href="#"><del>01:00 PM</del></a></div>
                            <div><a href="#">03:00 PM</a></div>
                            <div><a href="#"><del>05:00 PM</del></a></div>
                            {/* <div><a href="#">More</a></div> */}
                        </div>
                        <button className="booking-btn">Book</button>
                    </div>
                    <div className="appointment-board">
                        <p className="booking-day">Wed 06/5</p>
                        <div className="appointments-times">
                            <div><a href="#">12:00 PM</a></div>
                            <div><a href="#"><del>01:00 PM</del></a></div>
                            <div><a href="#">03:00 PM</a></div>
                            <div><a href="#"><del>05:00 PM</del></a></div>
                            {/* <div><a href="#">More</a></div> */}
                        </div>
                        <button className="booking-btn">Book</button>
                    </div>
                    <div className="arrow">
                        <button>
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
                <div className="pt-3 px-5 d-flex justify-content-between">
                    <div className="width20 pl-5">
                        <i className="fas fa-calendar-alt"></i>
                    </div>
                    <div>
                        <p className="subaddress mb-0">
                            Book Online, Pay at the center!
                                </p>
                        <p className="pl-3">
                            Center requires reservation!
                                </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppointmentsContainer;