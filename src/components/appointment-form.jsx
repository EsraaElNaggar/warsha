import React, { Component } from 'react';
import Nav from './nav';
import Footer from './footer';


class AppointmentForm extends Component {
    state = {
        appRes: {
            centerName: 'Eng Salah Ahmed',
            centerProf: 'Mechanistic',
            clientName: 'Mona',
            clientNumber: '01156492345',
            clientEmail: 'sydeny254@gmail.com'
        }
    }
    handleChange = ({ target }) => {
        const appRes = { ...this.state.appRes };
        appRes[target.id] = target.value;

        this.setState({ appRes });
    }

    render() {
        return (
            <React.Fragment>
                <Nav
                    className="white"
                />
                <section className="logWrap appointment-reservation">
                    <div className="reservation-info ">
                        <div className="d-flex justify-content-around">
                            <div className="center-img-container">
                                <img src="/assets/mechanistic.jpg" alt="" className="center-img img-circle" />
                            </div>
                            <div className="center-info">
                                <p className="center-name">Center <b>{this.state.appRes.centerName}</b></p>
                                <p>{this.state.appRes.centerProf}</p>
                            </div>
                        </div>
                        <div className="appointment-date">
                            <p>Tomorrow 05 May - 08:00 PM, <b>Appointment Reservation</b></p>
                        </div>
                    </div>
                    <form className="form">
                        <h2 className=" lFTitle">Enter Your Info.</h2>
                        <div className="appointment-form-input-container">
                            <i className="fas fa-user-alt"></i>
                            <input
                                type="text"
                                name="clientName"
                                id="clientName"
                                value={this.state.appRes.clientName}
                                onChange={this.handleChange}
                                placeholder="Full Client Name"
                            />
                        </div>

                        <div className="appointment-form-input-container">
                            <i className="fas fa-phone-alt"></i>
                            +2
                            <input
                                type="text"
                                className="appointment-form-input"
                                name="clientNumber"
                                id="clientNumber"
                                value={this.state.appRes.clientNumber}
                                onChange={this.handleChange}
                                placeholder="Mobile Number"
                            />
                        </div>

                        <div className="appointment-form-input-container">
                            <i className="fas fa-envelope"></i>
                            <input
                                type="email"
                                className="appointment-form-input"
                                name="clientEmail"
                                id="clientEmail"
                                value={this.state.appRes.clientEmail}
                                onChange={this.handleChange}
                                placeholder="Email Address (Optional)"
                            />
                        </div>

                        <div className="appointment-form-checkbox">
                            <input
                                type="checkbox"
                                name="anotherClient"
                                id="anotherClient"
                                onChange={this.handleChange}
                            />
                            I'm looking on behalf of another client.
                        </div>

                        <div className="d-flex justify-content-between appointment-btns">
                            <button type="submit" className="formBtn submit-appointment-form">Book</button>
                            <button type="button" className="formBtn cancel-appointment-form">Cancel</button>
                        </div>
                    </form>
                </section>
                <Footer />
            </React.Fragment>
        );
    }
}

export default AppointmentForm;