import React, { Component } from 'react';
import Input from '../common/input';

class SignupCenter2 extends Component {
    state = {
        data: {
            address: "",
            city: "",
            area: ""
        },
        cities: [
            { name: "Alexandria" },
            { name: "Cairo" },
        ],
        areas1: [
            { name: "Miami" },
            { name: "Sidi Beshr" },
            { name: "Loran" },
            { name: "Sidi Gaber" },
            { name: "Keliopatra" },
            { name: "Sporting" },
            { name: "Ibrahimia" },
            { name: "El Shatby" },
            { name: "Mahatet El Raml" },
        ],

        areas2: [
            { name: "Madinet Nasr" },
            { name: "El Haram" },
            { name: "El Tahrir" },
            { name: "Ramsis" },
            { name: "El Zamalek" },
            { name: "El Maadi" },
        ]
    }

    handleChange = ({ target }) => {
        const data = { ...this.state.data };
        data[target.id] = target.value;
        this.setState({ data });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleNext(this.state.data)
    }

    render() {
        const { cities, areas1, areas2, data } = this.state;
        return (
            <React.Fragment>
                <div className="form1Wrap myHeight">
                    <a href="/" className="logo animation a1"><span>W</span>arsha</a>
                    <h2 className="animation a1"> Welcome to our website !</h2>
                    <p className="let animation a1">Let's start with your location informations.</p>

                    <form className="form animation a2" onSubmit={this.handleSubmit}>

                        <Input
                            type="text"
                            name="address"
                            id="address"
                            placeholder="Address"
                            className="form-field animation a2"
                            value={this.state.data.address}
                            onChange={this.handleChange}
                            errorClasses="myError animation a2"
                            autoFocus
                        />

                        <select
                            value={this.state.data.city}
                            onChange={this.handleChange}
                            name="city"
                            id="city"
                            className="form-field animation a4"
                        >
                            <option value="0">Select your City</option>
                            {cities.map(city => (
                                <option value={city.name} >
                                    {city.name}
                                </option>
                            ))}
                        </select>


                        <select
                            value={this.state.data.area}
                            onChange={this.handleChange}
                            name="area"
                            id="area"
                            className="form-field animation a5"
                        >
                            <option value="0">Select your Area</option>
                            {data.city === cities[0].name ? areas1.map(area => (
                                <option value={area.name} >
                                    {area.name}
                                </option>
                            )) :
                                areas2.map(area => (
                                    <option value={area.name} >
                                        {area.name}
                                    </option>
                                ))
                            }
                        </select>

                        <button type="submit" className="formBtn animation a5">Next</button>
                    </form>
                </div>

            </React.Fragment>
        );
    }
}

export default SignupCenter2;