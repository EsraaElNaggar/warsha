import React, { Component } from 'react';
import Input from './input';

class SignUpUser3 extends Component {
    state = {
        account: {
            address: "",
            city: "",
            area: ""
        }

    }
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
                            value={this.state.account.address}
                            error={this.state.errors.address}
                            onChange={this.handleChange}
                            errorClasses="myError animation a2"
                            autofocus
                        />

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

export default SignUpUser3;