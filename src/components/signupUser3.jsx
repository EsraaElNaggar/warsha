import React, { Component } from 'react';
import Input from './input';

class SignupUser3 extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className="form1Wrap">
                    <a href="#" className="logo animation a1"><span>W</span>arsha</a>
                    <h2 className="animation a1">
                        Welcome to our website !
                    </h2>
                    <p className="let animation a1">
                        Let’s start with your profile and car information.
                    </p>
                    <form className="form animation a2">
                        <Input
                            type="text"
                            name="address"
                            id="address"
                            placeholder="Address"
                            className="form-field animation a2"
                            value={this.state.account.fName}
                            error={this.state.errors.fName}
                            onChange={this.handleChange}
                            errorClasses="myError animation a2"
                            autofocus
                        />

                        <select name="country" id="country" className="form-field animation a3">
                            <option value="">Country</option>
                        </select>
                        <div for="country"
                            className="myError animation a3">
                        </div>

                        <select name="city" id="city" className="form-field animation a4">
                            <option value="">City</option>
                        </select>
                        <div for="city" className="myError animation a4"></div>

                        <select name="area" id="area" className="form-field animation a5">
                            <option value="">Area</option>
                        </select>
                        <div for="area" className="myError animation a5"></div>

                        <button className="formBtn animation a6">Submit</button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default SignupUser3;