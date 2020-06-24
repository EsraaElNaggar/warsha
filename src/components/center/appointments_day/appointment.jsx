import React,{Component} from 'react';
import axios from 'axios';

class Appointment extends Component{
    state={
        displayedUser:{}
    }
    componentDidMount(){
        console.log()
        axios.get(`http://localhost:3000/users?id=${this.props.appointment.clientId}`)
        .then(res=>{
            console.log(res)
            this.setState({displayedUser:res.data[0]})
        })
    }
    render(){
        return (
            <React.Fragment>
                <div className="d-flex justify-content-between client-appointment">
                    {/* Appointment Cliend Card Start */}
                    <div className="appointment-client-card">
                        <div className="appointment-client-details">
                            <span>
                                {this.state.displayedUser.fName+" "+this.state.displayedUser.lName}
                            </span>
                            <span>
                                {this.props.appointment.time}
                            </span>
                        </div>
                        <div className="client-card-btns d-flex">
                            <button className="checkInBtn">
                                {/* <i class="fas fa-user-check"></i> Checked In Icon */}
                                <i className="fas fa-user-cog" />
                            Check In
                        </button>
                            <button className="noShowBtn">
                                {/* <i class="fas fa-eye-slash"></i> Not Showed Icon */}
                                <i className="fas fa-eye" />
                            No Show
                        </button>
                        </div>
                    </div>
                    {/* Appointment Cliend Card End */}
                    <button>
                        {this.props.appointment.status != "confirmed"?this.props.appointment.status:"Confirm Booking"}
                    </button>
                </div>
            </React.Fragment>
        );
    }
};

export default Appointment;