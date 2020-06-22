import React, { Component } from 'react';
import SignupCenter1 from './signupCenter1';
import SignupCenter2 from './signupCenter2';
import SignupCenter3 from './signupCenter3';

class SignupCenter extends Component {
    state = {
        centerName: "",
        ownerName: "",
        phoneNumber: "",
        centerEmail: "",
        centerPassword: "",
        cPassword: "",
        address: "",
        city: "",
        area: "",
        services: [],
        carBrands: [],
        carModels: [],
        carYears: [],

        bool1: true,
        bool2: false,
        bool3: false
    }

    handleNext1 = (data) => {
        this.setState({
            centerName: data.centerName,
            ownerName: data.ownerName,
            phoneNumber: data.phoneNumber,
            centerEmail: data.centerEmail,
            centerPassword: data.centerPassword,
            cPassword: data.cPassword,

            bool1: !this.state.bool1,
            bool2: !this.state.bool2,
        })
    }

    handleNext2 = (data) => {
        this.setState({
            address: data.address,
            city: data.city,
            area: data.area,

            bool2: !this.state.bool2,
            bool3: !this.state.bool3,
        })
    }

    handleNext3 = (data) => {
        this.setState({
            services: data.services,
            carBrands: data.carBrands,
            carModels: data.carModels,
            carYears: data.carYears,
        });
        this.handleSubmit();
    }

    handleSubmit = () => {
        console.log(this.state);
    }

    render() {
        const { bool1, bool2, bool3 } = this.state;
        return (
            <React.Fragment>
                {bool1 && <SignupCenter1
                    handleNext={this.handleNext1}
                />}
                {bool2 && <SignupCenter2
                    handleNext={this.handleNext2}
                />}
                {bool3 && <SignupCenter3
                    handleNext={this.handleNext3}
                />}
            </React.Fragment>
        );
    }
}

export default SignupCenter;