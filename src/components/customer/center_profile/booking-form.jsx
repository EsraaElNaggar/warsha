import React, { Component } from 'react';

class BookingForm extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
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
            </React.Fragment>
         );
    }
}
 
export default BookingForm;