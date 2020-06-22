import React, { Component } from 'react';
import SignUpUser1 from './signupUser1';
import SignUpUser2 from './signupUser2';
import SignUpUser3 from './signupUser3';

class SignupUser extends Component {
    state = {
        // account: {
        fName: "",
        lName: "",
        userEmail: "",
        userPassword: "",
        cPassword: "",
        carBrand: "",
        carModel: "",
        carYear: "",
        address: "",
        city: "",
        area: "",
        bool1: true,
        bool2: false,
        bool3: false
        // }
    }
    handleNext1 = (user) => {
        this.setState({
            fName: user.fName,
            lName: user.lName,
            userEmail: user.userEmail,
            userPassword: user.userPassword,
            cPassword: user.cPassword,
            bool1: !this.state.bool1,
            bool2: !this.state.bool2,
        })

    }
    handleNext2 = (user) => {
        this.setState({
            carBrand: user.carBrand,
            carModel: user.carModel,
            carYear: user.carYear,
            bool2: !this.state.bool2,
            bool3: !this.state.bool3,
        })
    }
    handleNext3 = (user) => {
        this.setState({
            address: user.address,
            city: user.city,
            area: user.area,
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
                {bool1 && <SignUpUser1
                    handleNext={this.handleNext1}
                />}
                {bool2 && <SignUpUser2
                    handleNext={this.handleNext2}
                />}
                {bool3 && <SignUpUser3
                    handleNext={this.handleNext3}
                />}
            </React.Fragment>
        );
    }
}

export default SignupUser;