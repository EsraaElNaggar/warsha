import React, { Component } from 'react';
import MultiSelect from "react-multi-select-component";

class SignupCenter3 extends Component {
    state = {
        data: {
            services: [],
            carBrands: [],
            carModels: [],
            carYears: [],
        },
        allServices: [
            {
                label: '4x4 Services',
                value: '4x4 Services'
            },
            {
                label: 'Batteries',
                value: 'Batteries'
            },
            {
                label: 'Brakes',
                value: 'Brakes'
            },
            {
                label: 'Car & Truck Care',
                value: 'Car & Truck Care'
            },
            {
                label: 'Domestic Cars & Trucks',
                value: 'Domestic Cars & Trucks'
            },
            {
                label: 'Electrical Services',
                value: 'Electrical Services'
            },
            {
                label: 'Electronic Services',
                value: 'Electronic Services'
            },
            {
                label: 'Engine & Transmission',
                value: 'Engine & Transmission'
            },
            {
                label: 'Engine Maintenance',
                value: 'Engine Maintenance'
            },
            {
                label: 'Fleet Brakes',
                value: 'Fleet Brakes'
            },
            {
                label: 'Fleet Drive Train',
                value: 'Fleet Drive Train'
            },
            {
                label: 'Fleet Electrical',
                value: 'Fleet Electrical'
            },
            {
                label: 'Fleet Electronics',
                value: 'Fleet Electronics'
            },
            {
                label: 'Fleet Engine Work',
                value: 'Fleet Engine Work'
            },
            {
                label: 'Fleet Front End Services',
                value: 'Fleet Front End Services'
            },
            {
                label: 'Fleet General Services',
                value: 'Fleet General Services'
            },
            {
                label: 'Fleet Suspension Work',
                value: 'Fleet Suspension Work'
            },
            {
                label: 'Fleet Wheel Services',
                value: 'Fleet Wheel Services'
            },
            {
                label: 'General Services',
                value: 'General Services'
            },
            {
                label: 'Heating and Cooling Services',
                value: 'Heating and Cooling Services'
            },
            {
                label: 'Import Cars & Trucks',
                value: 'Import Cars & Trucks'
            },
            {
                label: 'Miscellaneous Services',
                value: 'Miscellaneous Services'
            },
            {
                label: 'Quick Lube Services',
                value: 'Quick Lube Services'
            },
            {
                label: 'Towing',
                value: 'Towing'
            },
            {
                label: 'Transmission Services',
                value: 'Transmission Services'
            },
            {
                label: 'Undercar Services',
                value: 'Undercar Services'
            }
        ],
        allCarBrands: [
            {
                label: "Abarth",
                value: "Abarth"
            },
            {
                label: "Alfa Romeo",
                value: "Alfa Romeo"
            },
            {
                label: "Asia Motors",
                value: "Asia Motors"
            },
            {
                label: "Aston Martin",
                value: "Aston Martin"
            },
            {
                label: "Audi",
                value: "Audi"
            },
            {
                label: "Austin",
                value: "Austin"
            },
            {
                label: "Autobianchi",
                value: "Autobianchi"
            },
            {
                label: "Bentley",
                value: "Bentley"
            },
            {
                label: "BMW",
                value: "BMW"
            },
            {
                label: "Bugatti",
                value: "Bugatti"
            },
            {
                label: "Buick",
                value: "Buick"
            },
            {
                label: "Cadillac",
                value: "Cadillac"
            },
            {
                label: "Carver",
                value: "Carver"
            },
            {
                label: "Chevrolet",
                value: "Chevrolet"
            },
            {
                label: "Chrysler",
                value: "Chrysler"
            },
            {
                label: "Citroen",
                value: "Citroen"
            },
            {
                label: "Corvette",
                value: "Corvette"
            },
            {
                label: "Dacia",
                value: "Dacia"
            },
            {
                label: "Daewoo",
                value: "Daewoo"
            },
            {
                label: "Daihatsu",
                value: "Daihatsu"
            },
            {
                label: "Daimler",
                value: "Daimler"
            },
            {
                label: "Datsun",
                value: "Datsun"
            },
            {
                label: "Dodge",
                value: "Dodge"
            },
            {
                label: "Donkervoort",
                value: "Donkervoort"
            },
            {
                label: "DS",
                value: "DS"
            },
            {
                label: "Ferrari",
                value: "Ferrari"
            },
            {
                label: "Fiat",
                value: "Fiat"
            },
            {
                label: "Fisker",
                value: "Fisker"
            },
            {
                label: "Ford",
                value: "Ford"
            },
            {
                label: "FSO",
                value: "FSO"
            },
            {
                label: "Galloper",
                value: "Galloper"
            },
            {
                label: "Honda",
                value: "Honda"
            },
            {
                label: "Hummer",
                value: "Hummer"
            },
            {
                label: "Hyundai",
                value: "Hyundai"
            },
            {
                label: "Infiniti",
                value: "Infiniti"
            },
            {
                label: "Innocenti",
                value: "Innocenti"
            },
            {
                label: "Jaguar",
                value: "Jaguar"
            },
            {
                label: "Jeep",
                value: "Jeep"
            },
            {
                label: "Josse",
                value: "Josse"
            },
            {
                label: "Kia",
                value: "Kia"
            },
            {
                label: "Lada",
                value: "Lada"
            },
            {
                label: "Lamborghini",
                value: "Lamborghini"
            },
            {
                label: "Lancia",
                value: "Lancia"
            },
            {
                label: "Land Rover",
                value: "Land Rover"
            },
            {
                label: "Landwind",
                value: "Landwind"
            },
            {
                label: "Lexus",
                value: "Lexus"
            },
            {
                label: "Lincoln",
                value: "Lincoln"
            },
            {
                label: "Lotus",
                value: "Lotus"
            },
            {
                label: "Marcos",
                value: "Marcos"
            },
            {
                label: "Maserati",
                value: "Maserati"
            },
            {
                label: "Maybach",
                value: "Maybach"
            },
            {
                label: "Mazda",
                value: "Mazda"
            },
            {
                label: "McLaren",
                value: "McLaren"
            },
            {
                label: "Mega",
                value: "Mega"
            },
            {
                label: "Mercedes",
                value: "Mercedes"
            },
            {
                label: "Mercury",
                value: "Mercury"
            },
            {
                label: "MG",
                value: "MG"
            },
            {
                label: "Mini",
                value: "Mini"
            },
            {
                label: "Mitsubishi",
                value: "Mitsubishi"
            },
            {
                label: "Morgan",
                value: "Morgan"
            },
            {
                label: "Morris",
                value: "Morris"
            },
            {
                label: "Nissan",
                value: "Nissan"
            },
            {
                label: "Noble",
                value: "Noble"
            },
            {
                label: "Opel",
                value: "Opel"
            },
            {
                label: "Peugeot",
                value: "Peugeot"
            },
            {
                label: "PGO",
                value: "PGO"
            },
            {
                label: "Pontiac",
                value: "Pontiac"
            },
            {
                label: "Porsche",
                value: "Porsche"
            },
            {
                label: "Princess",
                value: "Princess"
            },
            {
                label: "Renault",
                value: "Renault"
            },
            {
                label: "Rolls-Royce",
                value: "Rolls-Royce"
            },
            {
                label: "Rover",
                value: "Rover"
            },
            {
                label: "Saab",
                value: "Saab"
            },
            {
                label: "Seat",
                value: "Seat"
            },
            {
                label: "Skoda",
                value: "Skoda"
            },
            {
                label: "Smart",
                value: "Smart"
            },
            {
                label: "Spectre",
                value: "Spectre"
            },
            {
                label: "SsangYong",
                value: "SsangYong"
            },
            {
                label: "Subaru",
                value: "Subaru"
            },
            {
                label: "Suzuki",
                value: "Suzuki"
            },
            {
                label: "Talbot",
                value: "Talbot"
            },
            {
                label: "Tesla",
                value: "Tesla"
            },
            {
                label: "Think",
                value: "Think"
            },
            {
                label: "Toyota",
                value: "Toyota"
            },
            {
                label: "Triumph",
                value: "Triumph"
            },
            {
                label: "TVR",
                value: "TVR"
            },
            {
                label: "Volkswagen",
                value: "Volkswagen"
            },
            {
                label: "Volvo",
                value: "Volvo"
            },
            {
                label: "Yugo",
                value: "Yugo"
            },
        ]
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleNext(this.state.data)
    }

    handleChangeService = (e) => {
        const data = { ...this.state.data };
        data.services = e;
        this.setState({ data });
        console.log(data)
    }
    handleChangeBrand = (e) => {
        const data = { ...this.state.data };
        data.carBrands = e;
        this.setState({ data });
        console.log(data)
    }
    handleChangeModel = (e) => {
        const data = { ...this.state.data };
        data.carModels = e;
        this.setState({ data });
        console.log(data)
    }
    handleChangeYear = (e) => {
        const data = { ...this.state.data };
        data.carYears = e;
        this.setState({ data });
        console.log(data)
    }

    render() {
        const { allServices, allCarBrands } = this.state;

        return (
            <React.Fragment>
                <div className="form1Wrap">
                    <a href="#" className="logo animation a1"><span>W</span>arsha</a>
                    <h2 className="animation a1"> Welcome to our website !</h2>
                    <p className="let animation a1">And now with your services provided for which car's informations.</p>

                    <form className="form animation a2" onSubmit={this.handleSubmit}>
                        <label htmlFor="services" className="CenterSignTagsLabels">
                            Services Provided :
                        </label>
                        <MultiSelect
                            id="services"
                            options={allServices}
                            value={this.state.data.services}
                            onChange={this.handleChangeService}
                            labelledBy={"Service"}
                        />

                        <label htmlFor="carBrands" className="CenterSignTagsLabels">
                            Car Brands :
                        </label>
                        <MultiSelect
                            id="carBrands"
                            options={allCarBrands}
                            value={this.state.data.carBrands}
                            onChange={this.handleChangeBrand}
                            labelledBy={"carBrands"}
                        />

                        <label htmlFor="carModels" className="CenterSignTagsLabels">
                            Car Models :
                        </label>
                        <MultiSelect
                            id="carModels"
                            options={allCarBrands}
                            value={this.state.data.carModels}
                            onChange={this.handleChangeModel}
                            labelledBy={"carModels"}
                        />

                        <label htmlFor="carModels" className="CenterSignTagsLabels">
                            Car Year :
                        </label>
                        <MultiSelect
                            id="carYears"
                            options={allCarBrands}
                            value={this.state.data.carYears}
                            onChange={this.handleChangeYear}
                            labelledBy={"carYears"}
                        />


                        <button type="submit" className="formBtn animation a5">Submit</button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default SignupCenter3;