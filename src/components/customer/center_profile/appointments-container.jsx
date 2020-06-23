import React, { Component } from 'react';

class AppointmentsContainer extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="booking-appointments">
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
                    </div>
         );
    }
}
 
export default AppointmentsContainer;