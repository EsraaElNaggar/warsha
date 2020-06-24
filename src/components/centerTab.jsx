import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CenterTab extends Component {
    state = {
        bla1: false,
        bla2: true
    }

    handleAppointmentClick = () => {
        this.props.history.replace("/addappointments");
    }
    handleProfileClick = () => {
        this.props.history.replace("/centermainprofile");


    }
    toggleClass = () => {
        this.setState({
            bla1: !this.state.bla1,
            bla2: !this.state.bla2
        })
    }
    render() {
        return (
            <div className="white tab">
                <Link to="/centermainprofile" className="logo">
                    <span>W</span>arsha
                </Link>
                <div className="wrapNewNav">
                    <div>
                        <button className={this.props.history.location.pathname === "/centermainprofile" ? "tabLinks active" : "tabLinks"}
                            onClick={this.handleProfileClick}>
                            Profile
                </button>
                    </div>
                    <div>
                        <button className={this.props.history.location.pathname === "/addappointments" ? "tabLinks active" : "tabLinks"}
                            onClick={this.handleAppointmentClick}>
                            Appointments
                </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CenterTab;