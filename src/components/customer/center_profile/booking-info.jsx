import React from 'react';

const BookingInfo = props => {

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
                {/* Booking Form Start */}
                <form>
                    <h6 className="text-center pt-3">Enter Your Info.</h6>
                    <p className="text-center">Tomorrow 15 June - 12:45 PM</p>
                    <div className="appointment-form-input-container">
                        <i className="fas fa-user-alt" />
                        <input type="text" name="clientName" id="clientName" defaultValue="Mona" placeholder="Full Client Name" />
                    </div>
                    <div className="appointment-form-input-container">
                        <i className="fas fa-phone-alt" />
                    +2<input type="text" className="appointment-form-input" name="clientNumber" id="clientNumber" defaultValue={" "} placeholder="Mobile Number" />
                    </div>
                    <div className="appointment-form-input-container">
                        <i className="fas fa-envelope" />
                        <input type="email" className="appointment-form-input" name="clientEmail" id="clientEmail" defaultValue="sydeny254@gmail.com" placeholder="Email Address (Optional)" />
                    </div>
                    <div className="appointment-form-checkbox">
                        <input type="checkbox" name="anotherClient" id="anotherClient" />
                    I'm looking on behalf of another client.
                </div>
                    <div className="d-flex justify-content-between appointment-btns">
                        <button type="submit" className="formBtn submit-appointment-form">Book</button>
                        <button type="button" className="formBtn cancel-appointment-form">Cancel</button>
                    </div>
                </form>
                {/* Booking Form End */}

                {/* Booking Appointments Start */}
                {/*  <div class="booking-appointments">
                        <p class="booking-appointments-title">
                            Choose Your Appointment
                        </p>
                        <div class="border-y d-flex justify-content-between appoitments-content">
                            <div class="arrow">
                                <button>
                                    <i class="fas fa-arrow-left"></i>
                                </button>
                            </div>
                            <div class="appointment-board">
                                <p class="booking-day">Today</p>
                                <ul class="appointments-times">
                                    <li>Not Available</li>
                                </ul>
                                <button class="booking-btn">Book</button>
                            </div>
                            <div class="appointment-board">
                                <p class="booking-day">Tomorrow</p>
                                <ul class="appointments-times">
                                    <li>12:00 PM</li>
                                    <li><del>01:00 PM</del></li>
                                    <li>03:00 PM</li>
                                    <li><del>05:00 PM</del></li>
                                    <li>More</li>
                                </ul>
                                <button class="booking-btn">Book</button>
                            </div>
                            <div class="appointment-board">
                                <p class="booking-day">Wed 06/5</p>
                                <ul class="appointments-times">
                                    <li>12:00 PM</li>
                                    <li><del>01:00 PM</del></li>
                                    <li>03:00 PM</li>
                                    <li><del>05:00 PM</del></li>
                                    <li>More</li>
                                </ul>
                                <button class="booking-btn">Book</button>
                            </div>
                            <div class="arrow">
                                <button>
                                    <i class="fas fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                        <div class="pt-3 px-5 d-flex justify-content-between">
                            <div class="width20 pl-5">
                                <i class="fas fa-calendar-alt"></i>
                            </div>
                            <div>
                                <p class="subaddress mb-0">
                                    Book Online, Pay at the center!
                                </p>
                                <p class="pl-3">
                                    Center requires reservation!
                                </p>
                            </div>
                        </div>
                    </div> */}
                {/* Booking Appointments End */}
            </div>
        </React.Fragment>
    );

};

export default BookingInfo;