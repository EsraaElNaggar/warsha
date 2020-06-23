import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getCarBrands, getBrandModels, getModelYears } from './../../_utils/cars-data-service';

class SignUpUser2 extends Component {
    state = {
        account: {
            carBrand: "",
            carModel: "",
            carYear: "",
        },
        carBrands: getCarBrands(),
        carModels: [],
        carYears: []
    };

    // input values handler
    handleChange = async ({ target }) => {
        const account = { ...this.state.account };
        account[target.id] = target.value;
        this.setState({ account });

        // get car models for chosen car brand
        if (target.id === "carBrand") {
            const modelsData = await getBrandModels(target.value);
            const carModels = [...new Set(modelsData)];
            this.setState({carModels});
        }

        // get car years for chosen car model
        if (target.id === "carModel") {
            const yearsData = await getModelYears(target.value);
            const carYears = [...new Set(yearsData)];
            this.setState({carYears});
        }
    };

    // form submit handler
    handleSubmit = e => {
        e.preventDefault();

        // pass data to parent signup
        this.props.handleNext(this.state.account);
    };

    render() {
        return (
            <React.Fragment>
                <div className="form1Wrap myHeight">
                    <Link to="/" className="logo animation a1">
                        <span>W</span>arsha
                    </Link>
                    <h2 className="animation a1"> Welcome to our website !</h2>
                    <p className="let animation a1">Let’s start with your profile and car information.</p>

                    <form className="form animation a2" onSubmit={this.handleSubmit}>
                        <select
                            onChange={this.handleChange}
                            name="carBrand"
                            id="carBrand"
                            className="form-field animation a2"
                            autoFocus
                        >
                            <option value="">Select your car brand (e.g. Ford)
                            </option>
                            {this.state.carBrands.map(brand => (
                                <option value={brand.value} key={brand.label}>
                                    {brand.value}
                                </option>
                            ))}
                        </select>

                        <select
                            onChange={this.handleChange}
                            name="carModel"
                            id="carModel"
                            className="form-field animation a3"
                        >
                            <option value="">
                                Select your car model (e.g. Ford)
                            </option>
                            {this.state.carModels.map(model => (
                                <option value={model} key={model} >
                                    {model}
                                </option>
                            ))}
                        </select>

                        <select
                            onChange={this.handleChange}
                            name="carYear"
                            id="carYear"
                            className="form-field animation a4">
                            <option value="">
                                Select your car year
                            </option>
                            {this.state.carYears.map(year => (
                                <option value={year} key={year} >
                                    {year}
                                </option>
                            ))}
                        </select>

                        <button type="submit" className="formBtn animation a5">Next</button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default SignUpUser2;