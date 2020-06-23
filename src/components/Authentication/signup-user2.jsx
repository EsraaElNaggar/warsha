import React, { Component } from 'react';

class SignUpUser2 extends Component {
    state = {
        account: {
            carBrand: "",
            carModel: "",
            carYear: "",
        },
        carBrand: [
            { name: "Abarth" },
            { name: "Alfa Romeo" },
            { name: "Asia Motors" },
            { name: "Aston Martin" },
            { name: "Audi" },
            { name: "Austin" },
            { name: "Autobianchi" },
            { name: "Bentley" },
            { name: "BMW" },
            { name: "Bugatti" },
            { name: "Buick" },
            { name: "Cadillac" },
            { name: "Carver" },
            { name: "Chevrolet" },
            { name: "Chrysler" },
            { name: "Citroen" },
            { name: "Corvette" },
            { name: "Dacia" },
            { name: "Daewoo" },
            { name: "Daihatsu" },
            { name: "Daimler" },
            { name: "Datsun" },
            { name: "Dodge" },
            { name: "Donkervoort" },
            { name: "DS" },
            { name: "Ferrari" },
            { name: "Fiat" },
            { name: "Fisker" },
            { name: "Ford" },
            { name: "FSO" },
            { name: "Galloper" },
            { name: "Honda" },
            { name: "Hummer" },
            { name: "Hyundai" },
            { name: "Infiniti" },
            { name: "Innocenti" },
            { name: "Jaguar" },
            { name: "Jeep" },
            { name: "Josse" },
            { name: "Kia" },
            { name: "Lada" },
            { name: "Lamborghini" },
            { name: "Lancia" },
            { name: "Land Rover" },
            { name: "Landwind" },
            { name: "Lexus" },
            { name: "Lincoln" },
            { name: "Lotus" },
            { name: "Marcos" },
            { name: "Maserati" },
            { name: "Maybach" },
            { name: "Mazda" },
            { name: "McLaren" },
            { name: "Mega" },
            { name: "Mercedes" },
            { name: "Mercury" },
            { name: "MG" },
            { name: "Mini" },
            { name: "Mitsubishi" },
            { name: "Morgan" },
            { name: "Morris" },
            { name: "Nissan" },
            { name: "Noble" },
            { name: "Opel" },
            { name: "Peugeot" },
            { name: "PGO" },
            { name: "Pontiac" },
            { name: "Porsche" },
            { name: "Princess" },
            { name: "Renault" },
            { name: "Rolls-Royce" },
            { name: "Rover" },
            { name: "Saab" },
            { name: "Seat" },
            { name: "Skoda" },
            { name: "Smart" },
            { name: "Spectre" },
            { name: "SsangYong" },
            { name: "Subaru" },
            { name: "Suzuki" },
            { name: "Talbot" },
            { name: "Tesla" },
            { name: "Think" },
            { name: "Toyota" },
            { name: "Triumph" },
            { name: "TVR" },
            { name: "Volkswagen" },
            { name: "Volvo" },
            { name: "Yugo" },
        ]
    };

    handleChange = ({ target }) => {
        const account = { ...this.state.account };
        account[target.id] = target.value;
        this.setState({ account });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleNext(this.state.account)
    };

    render() {
        return (
            <React.Fragment>
                <div className="form1Wrap myHeight">
                    <a href="/" className="logo animation a1"><span>W</span>arsha</a>
                    <h2 className="animation a1"> Welcome to our website !</h2>
                    <p className="let animation a1">Let’s start with your profile and car information.</p>

                    <form className="form animation a2" onSubmit={this.handleSubmit}>
                        <select
                            onChange={this.handleChange}
                            name="brand"
                            id="brand"
                            className="form-field animation a2"
                            autoFocus
                        >
                            <option value="">Select your car brand (e.g. Ford)
                            </option>
                            {this.state.carBrand.map(brand => (
                                <option value={brand.name} >
                                    {brand.name}
                                </option>
                            ))}
                        </select>

                        <select
                            onChange={this.handleChange}
                            name="model"
                            id="model"
                            className="form-field animation a3"
                        >
                            <option value="">
                                Select your car model (e.g. Ford)
                            </option>
                        </select>

                        <select
                            onChange={this.handleChange}
                            name="year"
                            id="year"
                            className="form-field animation a4">
                            <option value="">
                                Select your car year
                            </option>
                        </select>

                        <button type="submit" className="formBtn animation a5">Next</button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default SignUpUser2;