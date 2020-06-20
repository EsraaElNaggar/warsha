import React, { Component } from 'react';

class SignupUser2 extends Component {
    state = {
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

    render() {
        return (
            <React.Fragment>
                <div class="form1Wrap">
                    <a href="#" class="logo animation a1"><span>W</span>arsha</a>
                    <h2 class="animation a1"> Welcome to our website !</h2>
                    <p class="let animation a1">Let’s start with your profile and car information.</p>

                    <form class="form animation a2">
                        <label for="brand" class="animation a2"></label>
                        <select name="brand" id="brand" class="form-field animation a2" autofocus>
                            <option value="">Select your car brand (e.g. Ford)</option>
                            {this.state.carBrand.map(brand => (
                                <option value={brand.name}>{brand.name}</option>
                            ))}
                        </select>

                        <label for="model" class="animation a3"></label>
                        <select name="model" id="model" class="form-field animation a3">
                            <option value="">
                                Select your car model (e.g. Ford)
                            </option>
                        </select>

                        <label for="year" class="animation a4"></label>
                        <select name="year" id="year" class="form-field animation a4">
                            <option value="">
                                Select your car year
                                </option>
                        </select>

                        <button class="formBtn animation a5">Next</button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default SignupUser2;