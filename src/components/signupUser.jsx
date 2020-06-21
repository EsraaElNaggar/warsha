import React, { Component } from 'react';
import SignUpUser1 from './signupUser1';
import SignUpUser2 from './signupUser2';
import SignUpUser3 from './signupUser3';

class SignupUser extends Component {
    state = {
        account: {
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
            area: ""
        }
    }



    render() {
        return (
            <SignUpUser1></SignUpUser1>
            <SignUpUser2></SignUpUser2>
            <SignUpUser3></SignUpUser3>
        );
    }
}

export default SignupUser;