import React, { Component } from 'react';
import Nav from './nav';

class AppointmentConfirmation extends Component {
    state = {
        data: {
            centerName: 'Eng Salah Ahmed',
            centerProf: 'Mechanistic',
            clientName: 'Mona',
            clientNumber: '01156492345',
            clientEmail: 'sydeny254@gmail.com',
            resDate: 'Tomorrow 05 May - 08:00 PM',
            address: '50 Mohy Eldin Abo ElEzz Street Same Building As Alfa Labs And Beside KFC.'
        }
    }
    render() {
        const { centerName, centerProf, clientName, clientNumber, clientEmail, resDate, address } = this.state.data;
        return (
            <React.Fragment>
                <Nav className="white" />
                <section className=" appointment-confirmation">
                    <div className="firstPart d-flex justify-content-between container">
                        <div className="confirm-card div-border">
                            <div className="confirm-img">
                                <img width="100%" height="200" src="/assets/confirm.jpg" alt="" />
                                <span><i className="far fa-check-circle"></i></span>
                                <p>Your booking was successfully submitted!</p>
                            </div>
                            <p className="confirm-notify m-4">
                                <i className="far fa-envelope pr-2"></i> We notified Center Bla Bla of your booking
                            </p>
                            <p className="confirm-phone m-4">
                                <i className="fas fa-phone-alt pr-2"></i>
                                Center number: {clientNumber}
                            </p>
                        </div>
                        <div className="booking-details div-border">
                            <p className="booking-details-title">
                                <i className="fas fa-calendar-check pr-2 s-15"></i>
                                Booking Details
                            </p>
                            <div className="booking-details-info d-flex">
                                <span className="spanKey">
                                    Client Name
                                </span>
                                <span>
                                    {clientName}
                                </span>
                            </div>
                            <div className="line"></div>
                            <div className="booking-details-info d-flex">
                                <span className="spanKey">
                                    Booking Date
                                </span>
                                <span>
                                    {resDate} Appointment reservation
                                </span>
                            </div>
                            <div className="line"></div>
                            <div className="booking-details-info d-flex">
                                <span className="spanKey">
                                    Waiting Time
                                </span>
                                <span>
                                    19 minutes
                                </span>
                            </div>
                            <div className="line"></div>
                            <div className="booking-details-info d-flex">
                                <span className="spanKey">
                                    Center Address
                                </span>
                                <span>
                                    {address}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="thanks">
                        <p className="text-center">
                            Thank you for using <i className="c-green">Warsha</i>, Catch roads again soon!
                        </p>
                        <p className="text-center">
                            If you have any inquiry please call
                            <i className="fas fa-phone-alt c-green"></i>
                            16576
                        </p>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default AppointmentConfirmation;