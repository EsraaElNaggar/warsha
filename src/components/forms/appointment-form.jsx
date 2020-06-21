import React, { Component } from 'react';
import Nav from './nav';
import Footer from './footer';


class AppointmentForm extends Component {
    state = {
        data: {
            centerName: 'Eng Salah Ahmed',
            centerProf: 'Mechanistic',
            clientName: 'Mona',
            clientNumber: '01156492345',
            clientEmail: 'sydeny254@gmail.com',
            resDate: 'Tomorrow 05 May - 08:00 PM'
        }
    }
    handleChange = ({ target }) => {
        const data = { ...this.state.data };
        data[target.id] = target.value;

        this.setState({ data });
    }

    render() {
        const { centerName, centerProf, clientName, clientNumber, clientEmail, resDate } = this.state.data;
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
                                <p className="center-name">Center <b>{centerName}</b></p>
                                <p>{centerProf}</p>
                            </div>
                        </div>
                        <div className="appointment-date">
                            <p>{resDate}, <b>Appointment Reservation</b></p>
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
                                value={clientName}
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
                                value={clientNumber}
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
                                value={clientEmail}
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