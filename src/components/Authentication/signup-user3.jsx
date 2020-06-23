import React, { Component } from 'react';
import Input from '../common/input';
import { Link } from 'react-router-dom';
import { getCities, getAreas } from './../../_utils/locations-data-service';

class SignUpUser3 extends Component {
    state = {
        account: {
            address: "",
            city: "",
            area: ""
        },
        cities: getCities(),
        areas: []
    };

    // inputs value handler
    handleChange = ({ target }) => {
        const account = { ...this.state.account };
        account[target.id] = target.value;
        this.setState({ account });

        if (target.id === "city") {
            const areas = getAreas(target.value);
            this.setState({areas});
        }
    };

    // form submit handler
    handleSubmit = e => {
        e.preventDefault();

        //pass data to parent signup
        this.props.handleNext(this.state.account)
    };

    render() {
        return (
            <React.Fragment>
                <div className="form1Wrap myHeight">
                    <Link to="/" className="logo animation a1">
                        <span>W</span>arsha
                    </Link>
                    <h2 className="animation a1">
                        Welcome to our website !
                    </h2>
                    <p className="let animation a1">
                        Let’s start with your profile and car information.
                    </p>
                    <form className="form animation a2" onSubmit={this.handleSubmit}>
                        <Input
                            type="text"
                            name="address"
                            id="address"
                            placeholder="Address"
                            className="form-field animation a2"
                            value={this.state.account.address}
                            // error={this.state.errors.address}
                            onChange={this.handleChange}
                            errorClasses="myError animation a2"
                            autoFocus
                        />

                        <select
                            value={this.state.account.city}
                            onChange={this.handleChange}
                            name="city"
                            id="city"
                            className="form-field animation a4"
                        >
                            <option value="0">City</option>
                            {this.state.cities.map(city => (
                                <option value={city.value} key={city.lable} >
                                    {city.value}
                                </option>
                            ))}
                        </select>

                        <select
                            value={this.state.account.area}
                            onChange={this.handleChange}
                            name="area"
                            id="area"
                            className="form-field animation a5"
                        >
                            <option value="0">Area</option>
                            {this.state.areas.map(area => (
                                <option value={area} key={area} >
                                    {area}
                                </option>
                            ))}
                        </select>

                        <button type="submit" className="formBtn animation a6">Submit</button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default SignUpUser3;