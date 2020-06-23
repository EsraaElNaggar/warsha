import React, { Component } from 'react';

import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

import { setInStorage, getFromStorage } from '../../_utils/local-storage';

import SignUpUser1 from './signup-user1';
import SignUpUser2 from './signup-user2';
import SignUpUser3 from './signup-user3';

class SignupUser extends Component {

    state = {
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
    };

    // check if user already logged in
    componentDidMount(){
        const token = getFromStorage('authToken');

        if (token) {
            this.props.history.replace("/home");
        }
    }

    // signup1 handler
    handleNext1 = user => {
        this.setState({
            fName: user.fName,
            lName: user.lName,
            userEmail: user.userEmail,
            userPassword: user.userPassword,
            cPassword: user.confirmPassword,
            bool1: !this.state.bool1,
            bool2: !this.state.bool2,
        })
    }; 

    // signup2 handler
    handleNext2 = user => {
        this.setState({
            carBrand: user.carBrand,
            carModel: user.carModel,
            carYear: user.carYear,
            bool2: !this.state.bool2,
            bool3: !this.state.bool3,
        })
    };
    
    // signup3 handler
    handleNext3 = user => {
        this.setState({
            address: user.address,
            city: user.city,
            area: user.area,
        });
        this.handleSubmit();
    };

    // signup backend 
    register = ({fName, lName, userEmail, userPassword, carBrand, carModel, carYear, address, city, area}) =>{
        axios.post("http://localhost:3000/users", {
            fName,
            lName,
            userEmail,
            userPassword,
            carBrand,
            carModel,
            carYear,
            address,
            city,
            area
          }).then(res=>{
            
            const token = Math.random();
            setInStorage('authToken', String(token));
            setInStorage('currentID', res.data.id);
            //Update State
            // this.props.onAuthorRegister(res.data.data);
    
            //Redirect to Home Page
            this.props.history.replace("/home");

          }).catch(err=>{
    
              if(err.response.status === 422)
              {
                toast(err.response.data, {type:"error"});
              }
              else if (err.response.status === 409) {
                this.setState({errors: {username: err.response.data}});
              }
              else toast("Connection Error", {type:"error"});
          });
    };

    // login submit handler
    handleSubmit = () => {
        const {
            fName,
            lName,
            userEmail,
            userPassword,
            carBrand,
            carModel,
            carYear,
            address,
            city,
            area
        } = this.state;

        // call backend
        this.register({
            fName, 
            lName,
            userEmail,
            userPassword,
            carBrand,
            carModel,
            carYear,
            address,
            city,
            area
        });
    };

    render() {
        const { bool1, bool2, bool3 } = this.state;
        return (
            <React.Fragment>     
                <ToastContainer />
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