import React, { Component } from 'react';
import { WithContext as ReactTags } from 'react-tag-input';


const KeyCodes = {
    comma: 188,
    enter: 13,
    SPACE: 32,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter, KeyCodes.SPACE];
const placeholder = ["Services Provided", "Car Brands", "Car Models", "Car Years"];

class SignupCenter3 extends Component {
    state = {
        services: [],
        carBrands: [],
        carModels: [],
        carYears: [],


        allServices: [
            {
                id: '4x4 Services',
                text: '4x4 Services'
            },
            {
                id: 'Batteries',
                text: 'Batteries'
            },
            {
                id: 'Brakes',
                text: 'Brakes'
            },
            {
                id: 'Car & Truck Care',
                text: 'Car & Truck Care'
            },
            {
                id: 'Domestic Cars & Trucks',
                text: 'Domestic Cars & Trucks'
            },
            {
                id: 'Electrical Services',
                text: 'Electrical Services'
            },
            {
                id: 'Electronic Services',
                text: 'Electronic Services'
            },
            {
                id: 'Engine & Transmission',
                text: 'Engine & Transmission'
            },
            {
                id: 'Engine Maintenance',
                text: 'Engine Maintenance'
            },
            {
                id: 'Fleet Brakes',
                text: 'Fleet Brakes'
            },
            {
                id: 'Fleet Drive Train',
                text: 'Fleet Drive Train'
            },
            {
                id: 'Fleet Electrical',
                text: 'Fleet Electrical'
            },
            {
                id: 'Fleet Electronics',
                text: 'Fleet Electronics'
            },
            {
                id: 'Fleet Engine Work',
                text: 'Fleet Engine Work'
            },
            {
                id: 'Fleet Front End Services',
                text: 'Fleet Front End Services'
            },
            {
                id: 'Fleet General Services',
                text: 'Fleet General Services'
            },
            {
                id: 'Fleet Suspension Work',
                text: 'Fleet Suspension Work'
            },
            {
                id: 'Fleet Wheel Services',
                text: 'Fleet Wheel Services'
            },
            {
                id: 'General Services',
                text: 'General Services'
            },
            {
                id: 'Heating and Cooling Services',
                text: 'Heating and Cooling Services'
            },
            {
                id: 'Import Cars & Trucks',
                text: 'Import Cars & Trucks'
            },
            {
                id: 'Miscellaneous Services',
                text: 'Miscellaneous Services'
            },
            {
                id: 'Quick Lube Services',
                text: 'Quick Lube Services'
            },
            {
                id: 'Towing',
                text: 'Towing'
            },
            {
                id: 'Transmission Services',
                text: 'Transmission Services'
            },
            {
                id: 'Undercar Services',
                text: 'Undercar Services'
            }
        ],
        allCarBrands: [
            { id: "Abarth", text: "Abarth" },
            { id: "Alfa Romeo", text: "Alfa Romeo" },
            { id: "Asia Motors", text: "Asia Motors" },
            { id: "Aston Martin", text: "Aston Martin" },
            { id: "Audi", text: "Audi" },
            { id: "Austin", text: "Austin" },
            { id: "Autobianchi", text: "Autobianchi" },
            { id: "Bentley", text: "Bentley" },
            { id: "BMW", text: "BMW" },
            { id: "Bugatti", text: "Bugatti" },
            { id: "Buick", text: "Buick" },
            { id: "Cadillac", text: "Cadillac" },
            { id: "Carver", text: "Carver" },
            { id: "Chevrolet", text: "Chevrolet" },
            { id: "Chrysler", text: "Chrysler" },
            { id: "Citroen", text: "Citroen" },
            { id: "Corvette", text: "Corvette" },
            { id: "Dacia", text: "Dacia" },
            { id: "Daewoo", text: "Daewoo" },
            { id: "Daihatsu", text: "Daihatsu" },
            { id: "Daimler", text: "Daimler" },
            { id: "Datsun", text: "Datsun" },
            { id: "Dodge", text: "Dodge" },
            { id: "Donkervoort", text: "Donkervoort" },
            { id: "DS", text: "DS" },
            { id: "Ferrari", text: "Ferrari" },
            { id: "Fiat", text: "Fiat" },
            { id: "Fisker", text: "Fisker" },
            { id: "Ford", text: "Ford" },
            { id: "FSO", text: "FSO" },
            { id: "Galloper", text: "Galloper" },
            { id: "Honda", text: "Honda" },
            { id: "Hummer", text: "Hummer" },
            { id: "Hyundai", text: "Hyundai" },
            { id: "Infiniti", text: "Infiniti" },
            { id: "Innocenti", text: "Innocenti" },
            { id: "Jaguar", text: "Jaguar" },
            { id: "Jeep", text: "Jeep" },
            { id: "Josse", text: "Josse" },
            { id: "Kia", text: "Kia" },
            { id: "Lada", text: "Lada" },
            { id: "Lamborghini", text: "Lamborghini" },
            { id: "Lancia", text: "Lancia" },
            { id: "Land Rover", text: "Land Rover" },
            { id: "Landwind", text: "Landwind" },
            { id: "Lexus", text: "Lexus" },
            { id: "Lincoln", text: "Lincoln" },
            { id: "Lotus", text: "Lotus" },
            { id: "Marcos", text: "Marcos" },
            { id: "Maserati", text: "Maserati" },
            { id: "Maybach", text: "Maybach" },
            { id: "Mazda", text: "Mazda" },
            { id: "McLaren", text: "McLaren" },
            { id: "Mega", text: "Mega" },
            { id: "Mercedes", text: "Mercedes" },
            { id: "Mercury", text: "Mercury" },
            { id: "MG", text: "MG" },
            { id: "Mini", text: "Mini" },
            { id: "Mitsubishi", text: "Mitsubishi" },
            { id: "Morgan", text: "Morgan" },
            { id: "Morris", text: "Morris" },
            { id: "Nissan", text: "Nissan" },
            { id: "Noble", text: "Noble" },
            { id: "Opel", text: "Opel" },
            { id: "Peugeot", text: "Peugeot" },
            { id: "PGO", text: "PGO" },
            { id: "Pontiac", text: "Pontiac" },
            { id: "Porsche", text: "Porsche" },
            { id: "Princess", text: "Princess" },
            { id: "Renault", text: "Renault" },
            { id: "Rolls-Royce", text: "Rolls-Royce" },
            { id: "Rover", text: "Rover" },
            { id: "Saab", text: "Saab" },
            { id: "Seat", text: "Seat" },
            { id: "Skoda", text: "Skoda" },
            { id: "Smart", text: "Smart" },
            { id: "Spectre", text: "Spectre" },
            { id: "SsangYong", text: "SsangYong" },
            { id: "Subaru", text: "Subaru" },
            { id: "Suzuki", text: "Suzuki" },
            { id: "Talbot", text: "Talbot" },
            { id: "Tesla", text: "Tesla" },
            { id: "Think", text: "Think" },
            { id: "Toyota", text: "Toyota" },
            { id: "Triumph", text: "Triumph" },
            { id: "TVR", text: "TVR" },
            { id: "Volkswagen", text: "Volkswagen" },
            { id: "Volvo", text: "Volvo" },
            { id: "Yugo", text: "Yugo" },
        ]
    };

    ServiceHandleDelete = (i) => {
        let { services } = this.state;
        services = services.filter((service, index) => index !== i);
        this.setState({ services })
    }
    BrandHandleDelete = (i) => {
        let { carBrands } = this.state;
        carBrands = carBrands.filter((brand, index) => index !== i);
        this.setState({ carBrands })
    }
    ModelHandleDelete = (i) => {
        let { carModels } = this.state;
        carModels = carModels.filter((model, index) => index !== i);
        this.setState({ carModels })
    }
    YearHandleDelete = (i) => {
        let { carYears } = this.state;
        carYears = carYears.filter((year, index) => index !== i);
        this.setState({ carYears })
    }


    ServiceHandleAddition = (tag) => {
        let { services } = this.state;
        services = [...services, tag];
        this.setState({ services })
    }
    BrandHandleAddition = (tag) => {
        let { carBrands } = this.state;
        carBrands = [...carBrands, tag];
        this.setState({ carBrands })
    }
    ModelHandleAddition = (tag) => {
        let { carModels } = this.state;
        carModels = [...carModels, tag];
        this.setState({ carModels })
    }
    YearHandleAddition = (tag) => {
        let { carYears } = this.state;
        carYears = [...carYears, tag];
        this.setState({ carYears })
    }

    ServiceHandleDrag = (tag, currPos, newPos) => {
        const services = [...this.state.services];
        const providedSer = services.slice();

        providedSer.splice(currPos, 1);
        providedSer.splice(newPos, 0, tag);

        this.setState({ services: providedSer });
    }

    BrandHandleDrag = (tag, currPos, newPos) => {

        const carBrands = [...this.state.carBrands];
        const brands = carBrands.slice();

        brands.splice(currPos, 1);
        brands.splice(newPos, 0, tag);

        this.setState({ carBrands: brands });
    }

    ModelHandleDrag = (tag, currPos, newPos) => {

        const carModels = [...this.state.carModels];
        const models = carModels.slice();

        models.splice(currPos, 1);
        models.splice(newPos, 0, tag);

        this.setState({ carModels: models });
    }

    YearHandleDrag = (tag, currPos, newPos) => {

        const carYears = [...this.state.carYears];
        const years = carYears.slice();

        years.splice(currPos, 1);
        years.splice(newPos, 0, tag);

        this.setState({ carYears: years });
    }


    render() {
        const { allServices, allCarBrands } = this.state;
        return (
            <React.Fragment>
                <div className="form1Wrap">
                    <a href="#" className="logo animation a1"><span>W</span>arsha</a>
                    <h2 className="animation a1"> Welcome to our website !</h2>
                    <p className="let animation a1">Let’s start with your profile and your services provided informations.</p>

                    <form className="form animation a2">
                        <label htmlFor="services" className="CenterSignTagsLabels">
                            Services Provided :
                        </label>
                        <ReactTags
                            tags={this.state.services}
                            name="services"
                            suggestions={allServices}
                            placeholder={placeholder[0]}
                            classNames={{
                                tags: 'tagsClass',
                                tagInputField: 'form__field',
                                selected: 'selectedClass',
                                tag: 'taged-textbox__tag',
                                remove: 'taged-textbox__remove',
                            }}
                            inputFieldPosition="bottom"
                            autofocus={false}
                            handleDelete={this.ServiceHandleDelete}
                            handleAddition={this.ServiceHandleAddition}
                            handleDrag={this.ServiceHandleDrag}
                            delimiters={delimiters}
                        />

                        <label htmlFor="brands" className="CenterSignTagsLabels animation a3">
                            Car Brands :
                        </label>
                        <ReactTags
                            tags={this.state.carBrands}
                            name="brands"
                            suggestions={allCarBrands}
                            placeholder={placeholder[1]}
                            classNames={{
                                tags: 'tagsClass',
                                tagInputField: 'form__field',
                                selected: 'selectedClass',
                                tag: 'taged-textbox__tag',
                                remove: 'taged-textbox__remove',
                            }}
                            inputFieldPosition="bottom"
                            autofocus={false}
                            handleDelete={this.BrandHandleDelete}
                            handleAddition={this.BrandHandleAddition}
                            handleDrag={this.BrandHandleDrag}
                            delimiters={delimiters}
                        />

                        {/* <select name="brand" id="brand" className="form-field animation a3" autofocus>
                            <option value="">Select your car brand (e.g. Ford)</option>
                            {this.state.carBrand.map(brand => (
                                <option value={brand.name}>{brand.name}</option>
                            ))}
                        </select> */}

                        <label htmlFor="models" className="CenterSignTagsLabels animation a4">
                            Car Models :
                        </label>
                        <ReactTags
                            tags={this.state.carModels}
                            name="models"
                            // suggestions={allCarBrands}
                            placeholder={placeholder[2]}
                            classNames={{
                                tags: 'tagsClass',
                                tagInputField: 'form__field',
                                selected: 'selectedClass',
                                tag: 'taged-textbox__tag',
                                remove: 'taged-textbox__remove',
                            }}
                            inputFieldPosition="bottom"
                            autofocus={false}
                            handleDelete={this.ModelHandleDelete}
                            handleAddition={this.ModelHandleAddition}
                            handleDrag={this.ModelHandleDrag}
                            delimiters={delimiters}
                        />

                        {/* <select name="model" id="model" className="form-field animation a4">
                            <option value="">
                                Select your car model (e.g. Ford)
                            </option>
                        </select> */}

                        <label htmlFor="years" className="CenterSignTagsLabels animation a5">
                            Car Year :
                        </label>
                        <ReactTags
                            tags={this.state.carYears}
                            name="years"
                            // suggestions={allCarYears}
                            placeholder={placeholder[3]}
                            classNames={{
                                tags: 'tagsClass',
                                tagInputField: 'form__field',
                                selected: 'selectedClass',
                                tag: 'taged-textbox__tag',
                                remove: 'taged-textbox__remove',
                            }}
                            inputFieldPosition="bottom"
                            autofocus={false}
                            handleDelete={this.YearHandleDelete}
                            handleAddition={this.YearHandleAddition}
                            handleDrag={this.YearHandleDrag}
                            delimiters={delimiters}
                        />

                        {/* <select name="year" id="year" className="form-field animation a5">
                            <option value="">
                                Select your car year
                                </option>
                        </select> */}

                        <button className="formBtn animation a5">Next</button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default SignupCenter3;